const request = require("supertest");
const app = require("../server");

describe("GET /home", () => {
    it("respond with Hello World", (done) => {
        request(app).get("/home").expect("its works!", done);
    })
});