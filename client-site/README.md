
## Nourish Hub: Your Premier Hotel Booking Platform in Hungary

Welcome to Nourish Hub, your ultimate destination for hotel room bookings in Hungary. Whether you're planning a business trip, a family vacation, or a romantic getaway, Nourish Hub offers a seamless booking experience to ensure your stay is memorable and hassle-free.

## Features:

- **Homepage Design:**

Engaging banner showcasing hotel rooms.
Interactive map displaying hotel locations.
Newsletter signup for exclusive offers.
Featured rooms section with descriptions and "Book Now" button.
Authentic user reviews displayed prominently.

- **User Authentication:**

Email and password-based signup/login.
Google authentication via Firebase.

- **Navigation Bar:**

Links to "Rooms" page and "My Bookings" page.
"My Bookings" accessible only to authenticated users.

- **Rooms Page:**
  List of available rooms with filter by price range.
  Total review count for each room.
  Users can post reviews for rooms after booking.

- **Room Details Page:**

Detailed room description, price, size, and availability.
Special offers highlighted.
Ability to book rooms with availability validation.
Users can select booking dates and view a summary before confirmation.

- **My Bookings Page:**

Display of booked rooms for logged-in users.
Option to cancel bookings and post reviews.
Ability to update booking dates.

- **Responsive Design:** Enjoy a seamless browsing experience across all devices, from desktops to tablets and smartphones.

## Technologies Used

- React.js
- Vite
- React Router DOM
- Firebase Authentication
- Tailwind CSS
- Helmet
- Heroicons
- React icons
- Sweat alert
- React leaflet

## Demo

Check out the live demo of Nourish hub [here](https://nourish-hub-efad9.web.app/).

## Installation:

1. Clone the repository:
    client side: 
   ```bash
   https://github.com/Porgramming-Hero-web-course/b9a11-client-side-git12nazneen
   ```
   server side : https://github.com/Porgramming-Hero-web-course/b9a11-server-side-git12nazneen
2. Install dependencies:
   ```bash
   npm install
   ```

## Getting Started:

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and go to `http://localhost:5173` to view the website.



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_APIKEY`

`VITE_AUTHDOMAIN`

`VITE_PROJECTID`

`VITE_STORAGEBUCKET`

`VITE_MESSAGINGSENDERID`

`VITE_APPID`



## Deployment

1. First initialized firebase

```bash
sudo npm install -g firebase-tools
```

2. Login to your firebase consol

```bash
firebase Login
```

3. initialized firebase in this project

```bash
firebase init
```

4. Then Press Space to select features, then Enter to confirm your choices.

   > - Select `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`

5. Now enter foollowing command

   > - What do you want to use as your public directory? `dist`
   > - Configure as a single-page app (rewrite all urls to /index.html)? (y/N) `yes`
   > - Set up automatic builds and deploys with GitHub? (y/N) `no`

6. Now buld the dist folder

```bash
npm run build
```

7. Finally this time to deploy website in firebase, now enter this command

```bash
firebase deploy
```

## Contact

- For any inquiries or support, please contact [Nazneen](https://github.com/git12nazneen)
