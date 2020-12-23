/* eslint-disable no-underscore-dangle */
const _find = require('lodash/find');
const _isEmpty = require('lodash/isEmpty');
const _reject = require('lodash/reject');

let membersList = [];

const formatResponseData = (success, data) => {
  if (!success) {
    return {
      success,
      error: data,
    };
  }

  return {
    success,
    result: data,
  };
};

const getChatMembers = () => membersList;

const addMember = (username, id) => {
  const validUsername = _isEmpty(_find(membersList, { username }));

  if (!validUsername) {
    return formatResponseData(false, `The username ${username} is unavailable, please try another one.`);
  }

  const newUser = { id, username };

  membersList.push(newUser);

  return formatResponseData(true, newUser);
};

const removeMember = (username, id) => {
  const validUsername = !_isEmpty(_find(membersList, { username }));

  if (!validUsername) {
    return formatResponseData(false, `${username} not found in the chat members list.`);
  }

  membersList = _reject(membersList, { username });

  return formatResponseData(true, { id, username });
};

const findMemberById = id => {
  const member = _find(membersList, { id });

  if (!member) {
    return formatResponseData(false, `member with id ${id} not found.`);
  }

  return formatResponseData(true, member);
};

const findMemberByUsername = username => {
  const member = _find(membersList, { username });

  if (!member) {
    return formatResponseData(false, `member with username ${username} not found.`);
  }

  return formatResponseData(true, member);
};

const checkAvailableUsername = username => {
  const member = _find(membersList, { username });

  if (!member) {
    return formatResponseData(true, { username });
  }

  return formatResponseData(false, `We have an active member called "${username}". Try using another name.`);
};

module.exports = {
  getChatMembers,
  addMember,
  removeMember,
  findMemberById,
  findMemberByUsername,
  checkAvailableUsername,
};