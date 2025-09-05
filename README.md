Interview Questions

To get started, run `npm i` and `npm run dev`

Q1:
It looks like in `lib/contentful.js` we're having some troubles requesting data. How should we properly instantiate our SDK?

Q2:
You should now see `A Content Type ID is required` error message when making a request to Contentful. How can we figure out where the source of the problem is and rectify that?

Q3:
You should now see an `Unauthorized` error message, how can we figure out why we're getting this? 

Q4:
It looks like we're making a request but our content is in draft, what should we do?

Q5: 
We seem to be getting a `500` error now. What is wrong with our data? We know that the function is correct but why don't we receive any data back for that error?

Q6: 
Please navigate to Contentful. We're missing a Description field which it looks like our code does want this on like 48 in `app/menu/[drinkId]/page.js`, how can we do this? We already handle this as a code level though, can you check the code and establish what we should do based on that?

Q7:
When you click on a Product in the web application, you are taken to information about that drink. How could I introduce a “Recommended Drinks” option at the bottom?