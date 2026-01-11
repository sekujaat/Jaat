// src/services/advancedAccessService.js

const FriendshipModel = require("../models/Friendship");
const SubscriptionModel = require("../models/Subscription.model");

async function hasPremiumAccess(userId) {
  const sub = await SubscriptionModel.getLatestSubscription(userId);
  if (!sub) return false;
  if (sub.status !== "active") return false;
  if (sub.valid_until && new Date(sub.valid_until) < new Date()) return false;
  return true;
}

async function canCallUser({ callerId, calleeId }) {
  const friends = await FriendshipModel.listFriends(callerId);
  const isFriend = friends.includes(Number(calleeId));
  const premium = await hasPremiumAccess(callerId);

  return {
    allowed: isFriend || premium,
    isFriend,
    premium,
  };
}

module.exports = {
  hasPremiumAccess,
  canCallUser,
};