module.exports = function (title) {
  console.log("demo");
  
  return {
    getTitle: () => { return `The  title is: ${title}`},
    setTitle: (newTitle) => {
      title = newTitle;
      return true;
    }
  }
};