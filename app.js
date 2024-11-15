const {
    createAdvertisement,
    manageAdvertisements,
    deleteAdvertisement,
    trackEngagement,
    retrieveBestPerfomingAd
} = require("./Tharanika_SocialMediaMarketing.js");



// creates a new ad
console.log("Creating Advertisement📢")
try {
    const newAdForNike = createAdvertisement(
        "Unleash Your Inner Athlete with Nike's Latest Collection",
        "Step up your game with Nike's newest collection of performance gear. Whether you're hitting the track or tackling your daily workout. Embrace your power wear the Swoosh.",
        "Fitness Enthusiasts , Atheletes",
        "$7,000",
        "15/11/2024",
        "10/12/2024",
        "Nike",
        "300M",
        "Sportswear and Apparel"
    );
    console.log("------------------------------");
    console.log(newAdForNike.ad.title);
    console.log(newAdForNike.ad.content);
    console.log("------------------------------");
    console.log(newAdForNike.message);
    console.log("");
}
catch (error) {
    console.error(error.message);
}


// deletes ad by id, in this case deletes ad where id=2
console.log("Deleting Advertisement🗑️...")
console.log("")
let deleteAd = deleteAdvertisement(2);
console.log(deleteAd.message);

// Managing Advertisement, Lists Advertisement by Status-( Ongoing, Upcoming, Completed, Deleted)
console.log("Managing Advertisements📋...")
console.log("------------------------");
const viewAllAds = manageAdvertisements();
console.log('🔁 Ongoing Advertistments:');

// loops through outgoingAds array and logs details of each ad in this manner
for (let i = 0; i < viewAllAds.ongoing.length; i++) {

    let ad = viewAllAds.ongoing[i];
    console.log(`Advertisement ${i + 1}:`);
    console.log("");
    console.log(ad.title + " for " + ad.clientDetails.name);
    console.log(ad.content);
    console.log("");
    console.log("Budget:" + ad.budget + " || " + "Target Audience:" + ad.targetAudience);
    console.log("");
    console.log("Advertisement proposed by:" + ad.clientDetails.name);
    console.log("");
    console.log("Timeline for advertisement:" + ad.dateOfLaunch + " to " + ad.endDate);
    console.log("--------------------------------------");
    console.log("");

}
// loops through upcomingAds array and logs details of each ad in this manner
console.log('🔔 Upcoming Advertisements:');
console.log("..................................");
for (let i = 0; i < viewAllAds.upcoming.length; i++) {
    let ad = viewAllAds.upcoming[i];
    console.log(`Advertisement ${i + 1}:`);
    console.log("");
    console.log(ad.title + " for " + ad.clientDetails.name);
    console.log("");
    console.log(ad.content);
    console.log("");
    console.log("Budget:" + ad.budget + " || " + "Target Audience:" + ad.targetAudience);
    console.log("");
    console.log("Advertisement proposed by:" + ad.clientDetails.name);
    console.log("");
    console.log("Timeline for advertisement:" + ad.dateOfLaunch + " to " + ad.endDate);
    console.log("--------------------------------------");
    console.log("");
}

// loops through completedAds array and logs details of each ad in this manner
console.log('✅ Completed Advertisements:');
console.log("..................................");

for (let i = 0; i < viewAllAds.completed.length; i++) {
    let ad = viewAllAds.completed[i];
    console.log(`Advertisement ${i + 1}:`);
    console.log("");
    console.log(ad.title + " for " + ad.clientDetails.name);
    console.log("");
    console.log(ad.content);
    console.log("");
    console.log("Budget:" + ad.budget + " || " + "Target Audience:" + ad.targetAudience);
    console.log("");
    console.log("Advertisement proposed by:" + ad.clientDetails.name);
    console.log("");
    console.log("Timeline for advertisement:" + ad.dateOfLaunch + " to " + ad.endDate);
    console.log("--------------------------------------");
}

// Ad we deleted using the deleteAdvertisment fuction should appear here 
// loops through deletedAds array and logs details of each ad in this manner
console.log(' 🚮 Deleted Advertisements:');
console.log("..................................");
for (let i = 0; i < viewAllAds.deleted.length; i++) {
    let ad = viewAllAds.deleted[i];
    console.log(`Advertisement ${i + 1}`);
    console.log(ad.title + " for " + ad.clientDetails.name);
    console.log("");
    console.log(ad.content);
    console.log("");
    console.log("Budget:" + ad.budget + " || " + "Target Audience:" + ad.targetAudience);
    console.log("");
    console.log("Advertisement proposed by:" + ad.clientDetails.name);
    console.log("");
    console.log("Timeline for advertisement:" + ad.dateOfLaunch + " to " + ad.endDate);
    console.log("--------------------------------------");
}

// Ad we created using create Advertisement function will appear here
// loops through advertisements array and logs details of all ads in this manner
console.log(' 💯 All Advertisements:');
console.log("..................................");
for (let i = 0; i < viewAllAds.all.length; i++) {
    let ad = viewAllAds.all[i];
    console.log(`Advertisement ${i + 1}`);
    console.log(ad.title + " for " + ad.clientDetails.name);
    console.log("");
    console.log(ad.content);
    console.log("");
    console.log("Budget:" + ad.budget + " || " + "Target Audience:" + ad.targetAudience);
    console.log("");
    console.log("Advertisement proposed by:" + ad.clientDetails.name);
    console.log("");
    console.log("Timeline for advertisement:" + ad.dateOfLaunch + " to " + ad.endDate);
    console.log("--------------------------------------");
}


// tracking engagement by advertisement id
console.log("Tracking Engagement...📊")
const adEngagement = trackEngagement(4);
console.log("Likes Gained:" + adEngagement.likes);
console.log("Comments Recieved:" + adEngagement.comments);
console.log("Shared By: " + adEngagement.shares);
console.log("");


// retrieving best performing (highest engagement) advertisement
console.log("Best Performing Advertisements🏆:")
const bestAd = retrieveBestPerfomingAd();
console.log(bestAd.title);
console.log("Statistics");
console.log("--------------------------");
console.log("Likes Gained: " + bestAd.likes);
console.log("Comments Recieved: " + bestAd.comments);
console.log("Shared by: " + bestAd.shares);
