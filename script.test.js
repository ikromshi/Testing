const search = require("./script");

const dbMock = ["wholetthedogsout.com", "dogsloveme.com", "eskimo.com", "delegota.com"];

test("First Test", () => {
  expect("test").toBe("test");
});

test("Search Test", () => {
  expect(search("dog", dbMock)).toEqual(["wholetthedogsout.com", "dogsloveme.com"]);
})