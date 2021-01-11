const { default: profileReducer, addPost, deletePost } = require("./profileReducer");

let state = {
    postsData: [
        { id: 1, name: "Alexandr Gluhov", content: "I'm crying because I realized that I like the work of Justin Bieber", like: "12", comment: "1"},
        { id: 2, name: "Alexandr Gluhov", content: "Code refactoring, tired me out", like: "5", comment: "3"},
        { id: 3, name: "Alexandr Gluhov", content: "Code refactoring, tired me out", like: "5", comment: "3"},
    ],
};

it('New Post should be added', () => {
    let action = addPost('text into test');
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(4)
  });

  it('True content message', () => {
    let newState = profileReducer(state, {});
    expect(newState.postsData[2].content).toBe('Code refactoring, tired me out')
  });

  it('after deliting length of content sould be decrement', () => {
    let action = deletePost(2);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(2)
  });

  it(`after deliting length souldn't be decrement if id is incorrect `, () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3)
  });