$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Azuresampleproject.feature");
formatter.feature({
  "line": 1,
  "name": "Automated End2End Tests",
  "description": "Description: The purpose of this feature is to test End 2 End integration.",
  "id": "automated-end2end-tests",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Customer place an order by purchasing an item from search",
  "description": "",
  "id": "automated-end2end-tests;customer-place-an-order-by-purchasing-an-item-from-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "he search for \"dress\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "choose to buy the first item",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "moves to checkout from mini cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter personal details on checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "select same delivery address",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select payment method as \"check\" payment",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "place the order",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 17722723622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dress",
      "offset": 15
    }
  ],
  "location": "Steps.he_search_for(String)"
});
formatter.result({
  "duration": 3894525359,
  "status": "passed"
});
formatter.match({
  "location": "Steps.choose_to_buy_the_first_item()"
});
formatter.result({
  "duration": 5304846841,
  "status": "passed"
});
formatter.match({
  "location": "Steps.moves_to_checkout_from_mini_cart()"
});
formatter.result({
  "duration": 1076582,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_personal_details_on_checkout_page()"
});
formatter.result({
  "duration": 22235,
  "status": "passed"
});
formatter.match({
  "location": "Steps.select_same_delivery_address()"
});
formatter.result({
  "duration": 18329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "check",
      "offset": 26
    }
  ],
  "location": "Steps.select_payment_method_as_payment(String)"
});
formatter.result({
  "duration": 38760,
  "status": "passed"
});
formatter.match({
  "location": "Steps.place_the_order()"
});
formatter.result({
  "duration": 934394331,
  "status": "passed"
});
});