# Tharanika's Social Media Marketing Node Module
This is a simulated advertisement management system designed for social media marketing campaigns. It is ideal for simulating and managing social media marketing campaigns. You can create advertisements, track their performance, delete advertisements and retrieve the best-performing advertisements. This system can help social media marketers keep track of their campaign. analyze performance, and make informed decisions based on engagement metrics.

## Installation Steps

1. Install `node.js`.
2. Download `Tharanika_SocialMediaMarketing.js`.
3. Use the require function to require the file `require.("./Tharanika_SocialMediaMarketing.js)`
4. Install prompt-sync dependency `npm install prompt-sync`.

## APIs
1. Create Advertisements
2. Manage Advertisements
3. Delete Advertisement
4. Track Engagement
5. Retrieve Best Perfoming Advertisment

## Create Advertisement Function Details

`createAdvertisment(
    title,
    content,
    targetAudience,
    budget,
    dateOfLaunch,
    endDate,
    clientDetails
)`

- `title`(String): The title of the advertisement.
- `content:`(String): The main content or description of the advertisement
- `targetAudience`(String): The target audience for the ad (Eg. "Young Adults, Fashion Enthusiasts)
- `budget`(String); The budget allocated for the advertisement (eg."$10,000").
-`dateOfLaunch`(String):The launch date of the advertisment (format:"dd/mm/yy")
-`endDate`(String):The end date of the advertisement. (format:"dd/mm/yy")
- `clientDetails`(Object):The details of the client running the ad. This object should include:
     - `name`(String): The name of the client
     - `followersCount`(String): The number of followers of the client on Instagram (eg.1.2M)
     - `industry`(String): The industry in which the client operates(eg."Food and Beverage")

`Returns`
- An object with a success message an object of the created advertisement.

## Manage Advertisment Function Details
 `Returns`
 - An object with four arrays representing the status of advertisements:
   - `ongoing`: Advertisements that are currently running.
   - `upcoming`:Advertisements that are scheduled to launch in the future.
   - `completed`: Advertisements that have already ended
   - `deleted`: Advertisements that have been deleted. (marked with `id`<0)

## Track Engagement Function Details
`Parameters`:
- `adId`(Number): The ID of the advertisement whose engagement metrics you want to retrieve

`Returns`:
- An object with the engagement statistics of the add: Likes, Comments, and Shares

## Retrieve Best Performing Advertisement Functions
`Returns`:
- An object with the best performing advertisment based on engagement metrices. The ad with the highest sum of likes, comments and shares is considered the best performing ad.

## Delete Advertisement function
`deleteAdvertisemnt(adId)`

`Parameters`:
- `adId`(Number): The ID of the advertisement you want to delete

`prompt-sync`:
- Used to display a confirmation message to the user asking if they want to delete the advertisement. It waits for user input (either `yes` or `no`)

`Returns`:
- An object with a messge indicating whether the ad was deleted or if the deletion was cancelled

## References

- Youtube
- StackOverflow
- Google
- Emojipedia
- https://docs.github.com/en/get-started/writing-on-github/ getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

