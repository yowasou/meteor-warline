Users = new Meteor.Collection("Users");
Units = new Meteor.Collection("Units");
Maps = new Meteor.Collection("Maps");
BattleUnits = new Meteor.Collection("BattleUnits");
HandWeapons = new Meteor.Collection("HandWeapons");
HandWeaponsMaster = new Meteor.Collection("HandWeaponsMaster");
//ユーザー情報
//mode:1
//mode:2
//mode:3 ユニット作成中
//ユーザー全消し： Users.remove({});
//users: [{userid, password, unitid, nowmapid, mode}]
//units: [{unitid, name, lefthandid ,righthandid, hp}]
//maps: [{mapid, name}]
//戦闘中のユニット情報
//battleunits: [{unitid, mapid, x, y, hp}]
//handweapons: [{weaponid, name, wlength, wdmg, wangle, wsetuptime}]
//handweaponsmaster: [{weaponid_m, name, wlength, wdmg, wangle, wsetuptime, wsetupangle}]

if (Meteor.is_server) {
  //init handweapons master
  if (HandWeaponsMaster.find().count() == 0)
  {
    HandWeaponsMaster.insert({weaponid: 1, name: "Sniper Rifle"
      , wlength: 1000, wdmg: 1000, wangle: 20, wsetuptime: 3000});
    HandWeaponsMaster.insert({weaponid: 2, name: "Asault Rifle"
      , wlength: 100, wdmg: 200, wangle: 45, wsetuptime: 10});
    HandWeaponsMaster.insert({weaponid: 3, name: "Machine Gun"
      , wlength: 50, wdmg: 250, wangle: 120, wsetuptime: 2});
    HandWeaponsMaster.insert({weaponid: 4, name: "Blade"
      , wlength: 10, wdmg: 400, wangle: 210, wsetuptime: 0});
  }
}
