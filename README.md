# React Fitness Application

This project is divided into several components:

- Navbar (Header)
- Home page
- Fetch data
- Horizontal scrollbar
- Exercises component
- Exercises card component
- Exercise detail component
- Video
- Footer
- Deploy 部署


You can run this project by running command `npm start`

## Navbar (Header)


## Home page
1. Banner
2. Search area and Rapid API
   1. Input fields & search button & functions
   2. Rapid API keys and .env variables
3.  Horizontal scroll bar (use specific version of react-horizontal-scrolling-menu)
4.  Search results

## Exercise component
1. Exercise section
   1. Fetch data based on key words and search parameters
   2. Render graph and title
2. Each Exercise Card
   
## Exercise Detail component
1. Exercise detailed information
   1. pass parameters from Homepage to Detail component
   2. render bodyPart, gifUrl, name, target, equipment in exerciseDetail
2. Exercise video
   1. Use Component: Horizontal scroll bar
   2. get youtube video data (video img, id, name etc.) from Rapid api provided
   3. render these information in exercise detail page
3. Similar Exercises
   1. Use Component: Horizontal scroll bar
   2. Get similar exercise data
   3. Get similar equipment data

## Footer
1. Add footer image, company, and other information