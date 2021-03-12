
export const CHARACTER_LIST = 'CHARACTER_LIST';

const loadCharacterList = function (characterList) {
  return {
    type: "CHARACTER_LIST",
    characterList
  }
};
const deletePhone = function (phone) {
  return {
    type: "DELETE_PHONE",
    phone
  }
};



export default {loadCharacterList, deletePhone};