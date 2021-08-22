1. User Types:

(1) **Customer**

(a) Registered user

(b) Guest user

(2) **Admin**

2. Assumptions:

  1. First-time user can use the website as a guest and has an option to register during payment activities
  2. A guest user should be able to enter an order id, and email to see the detailed information of one order
  3. The user shall be able to login using Google or Facebook. The students should NOT implement their own login logic.
  4. A registered user should be able to see his/her order history.
  5. Use Stripe API for payment.
  6. Use OpenTripPlanner for route calculation.

3. User Scenarios for a **Customer**

**3.1**** Core Scanarios**

1. Search tickets:

The **Customer** will choose their source station, target station, departure date, from dropdown lists, and select &quot;round trip&quot; or &quot;one way&quot;. The website will return a list of itineraries that match the request. (missing the number of travelers)

2. Check details:

The **Customer** will click an itinerary from the list and a website will show the details of the itineraries in a new dialogue or webpage,

3. Add to cart:

The system provides an &quot;add to cart&quot; option, if it is a round trip, then the **Customer** has to select info of both trips.

4. Enter traveller information

The **Customer** will input the number of tickets to the input field in the route detail dialogue or webpage and make an order. Required traveller information include:

First name,

last name,

Email

phone number

5. Enter payment information

The **Customer** enters payment info when they checkout and no payment information is saved before. Payment information can be either credit card info or paypal account. Paypal accounts should use the paypal API.

6. Check out

The **Customer** will click the cart button and the webpage will go to the order page, show order details and let the user checkout. The website will prompt the user to sign in or to checkout as a guest.

7. Check out (Guest):

The **Customer** must enter a billing address and credit card. The user must also enter a name and email. The website responds with (1) success, (2) invalid information, (3) server error. If (2), the website must give detailed information (Ex: invalid credit card number).

8. Check out (Signed-In User):

The **Customer** may select from a list of saved billing information. The website responds with (1) success, (2) invalid information, (3) server error. If (2), the website must give detailed information (Ex: invalid credit card number). If the user has no saved billing information, they may add one using a similar interface to the guest check out.

9. Sign In:

The **Customer** can sign in using Google or Facebook. The **Customer** can sign in at any time from any page without losing the contents of their cart.

10. View order history:

If the **Customer** is signed in, they can view a list of past purchases. Each item in the list should include all details of the purchased tickets and all details of billing information.

**3.2 Optional Scanarios**

\*11. Request refund

The user may request a refund for any past purchase. They can select from a list of reasons for why they should be refunded. The website will respond with a success or failure message.

\*12. Browse list of potential destinations

\*13. View a map of potential destinations:

\*14. View attractions near potential destinations:

4. User Scenarios for a **Admin**

**4.1 Core Scenarios**

1. Manage customers&#39; info

The **Admin** may query the user by user id, name or order id and the website will respond with the user(s) with the given field and allow admin to view or edit the user info by selecting a user.

1. Manage a customer&#39;s orders

The **Admin** may query the order by order id or user id and the website will respond with the order(s) with the order id or user id and allow admin to view the order details by selecting an order. The admin may cancel a user&#39;s order and the system will make a refund.

**4.2 Optional Scanarios**

\*The **Admin** may Add an order for the customer

\* Showing a dashboard

  1. \*View total revenue for the day
  2. \*Add a delay warning

\*View a list of refund requests and accept or deny a request.
