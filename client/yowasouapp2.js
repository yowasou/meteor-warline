if (Meteor.is_client) {
  Template.login.show = function () {
    //if loggined , do not show login form.
    if (userid())
    {
      return false;
    }
    else
    {
      return true;
    }
  };

  Template.login.events = {
    'click button.userlogin' : function () {
      user = Users.find({userid: $("#userid").val().trim()
        ,password:$("#password").val().trim()});
      if (user.count() > 0)
      {
        alert('Welcome ' + $("#userid").val().trim() + ' !!');
        Session.set("userid", $("#userid").val().trim()); 
        setmode(3);
      }
      else
      {
        alert('Cannot Found userid or password.');  
      }
    }
  };
  Template.newuser.events = {
    'click button.usernew' : function () {
      var vuserid = $("#new_userid").val().trim();
      var vpass = $("#new_password").val().trim();
      user = Users.find({userid: vuserid});
      if (user.count() > 0)
      {
        alert('User id ' + vuserid + ' is exists. Please regist another user id.');  
        return;
      }  
      Users.insert({userid: vuserid, password: vpass, mode: 0});
      alert('Nice to meet you, ' + vuserid + ' !!');
      Session.set("userid", vuserid); 
      setmode(3);
    }
  };
  Template.login.userid = function () {
    return userid();
  };
  Template.lines.show = function () {
    if (usermode() == 10)
      return true;
    else
      return false;
  };
  Template.createunit.show = function () {
    alert(usermode());
    if (usermode() == 3)
      return true;
    else
      return false;
  };
  Template.createunit.handweaponsmaster = function () {
    return HandWeaponsMaster.find({}, {sort: {weaponid_m: 1}});
  };
}

var userid = function () {
  return Session.get("userid");
};
var usermode = function () {
  user = Users.find({userid: userid()});
  if (user.count() > 0)
  {
    return user.fetch()[0].mode;
  }
  else
  {
    return 0;
  }
};
var setmode = function(vmode) {
  Users.update( {userid: userid()}, {$set:{mode:vmode}}, false, true )
};

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}