const { test, expect } = require("@playwright/test");
var userid;
var baseUrl = "https://reqres.in/api/users"
test("Get Method",async ({ request }) => {
   const response = await request.get(`${baseUrl}?page=2`);
   console.log(await response.json());
   expect(response.status()).toBe(200);
})

test("Post Method",async({ request }) => {
    const response = await request.post(`${baseUrl}`,{
        data : { "name": "john", "job": "Developer" },
        // headers : { "Accept" : "application/json" }
    });
    console.log(await response.json());
    expect(response.status()).toBe(201);
    var user =await response.json();
    userid = user.id;
})

test("Put Method",async ({ request }) => {
    const response = await request.put(`${baseUrl}/`+userid,{
        data : { "name": "john", "job": "Tester" },
        // headers : { "Accept" : "application/json" }
    });
    console.log(await response.json());
    expect(response.status()).toBe(200);
})

test("Delete Method",async ({ request }) => {
    const response = await request.delete(`${baseUrl}/`+userid);
    expect(response.status()).toBe(204);
})

