// Installed the prompt-sync module to integrate simple user input function as part of the deleteAdvertisement function
const prompt = require('prompt-sync')();

//Data for advertisements
const advertisements = [
    {
        id: 1,
        title: "Rare Beauty Presents:The New Soft Pinch Liquid Blush Collection",
        content: "Introducing the Soft Pink Liquis Blush, experience a pop of radiant color that's weightless and long-lasting! ",
        targetAudience: "Beauty Enthusiasts, younger consumers(Gen Z and Millenials)",
        budget: "$13,500",
        engagement: {
            likes: "245,375,000",
            comments: "543,302",
            shares: "250,700"
        },
        dateOfLaunch: "10/09/2024",
        endDate: "31/11/2024",
        clientDetails: {
            name: "Rare Beauty",
            followersCount: "7.8M",
            industry: "Cosmetics",
        }

    },
    {
        id: 2,
        title: "Savor the Flavor: KFC's Crispy, Juicy Chicken. Just for you!",
        content: "Craving something crispy, tender, and full of flavor? KFC's signature fried chicken is made fresh to order, with every bite delivering the perfect blend of herbs and spices. Visit KFC today and enjoy the taste that keeps you coming back for more!",
        targetAudience: "Fast Food Enthusiasts, young adults, middle-income consumers",
        budget: "$15,000",
        engagement: {
            likes: "343,900,323",
            comments: "234,234,00",
            shares: "324,000"
        },
        dateOfLaunch: "13/06/2024",
        endDate: "13/08/2024",
        clientDetails: {
            name: "Kentucky Fried Chicken(KFC)",
            followersCount: "1.4M",
            industry: "Food and Beverage",
        }

    },
    {
        id: 3,
        title: "Elevate Your Everday with Uniqlo's Latest Collection",
        content: "Discover the perfect balance of comfort and style with Uniqlo's newest arrivals. Explore sustainable fashion that moves with you-designed to last,styled for now. Shop out latest collection online and in stores today!",
        targetAudience: "Fashion-concious, young individuals",
        budget: "$5,000",
        engagement: {
            likes: "120,434,000",
            comments: "343,000",
            shares: "244,756"
        },
        dateOfLaunch: "25/12/2024",
        endDate: "2/02/2025",
        clientDetails: {
            name: "Uniqlo",
            followersCount: "40M",
            industry: "Fashion and Retail",
        }

    },
    {
        id: 4,
        title: "Unlock healthy and radiant skin with CeraVe",
        content: "Experience the power of dermatologist-recommended skincare with CeraVe's advances formulas. Packed with essential ingredients like ceramides,hyaluronc acid, and niacinamide. Try CeraVe today- your skin deserves it!",
        targetAudience: "Skincare Enthusiasts, People with Specific Skin Conditions",
        budget: "$7,800",
        engagement: {
            likes: "546,456,0",
            comments: "234,000",
            shares: "123,000"
        },
        dateOfLaunch: "10/10/2024",
        endDate: "12/12/2024",
        clientDetails: {
            name: "CeraVe",
            followersCount: "87,230",
            industry: "Skincare",
        }

    }

]


// Creates Advertisements, pushes values into advertisements array
function createAdvertisement(title, content, targetAudience, budget, dateOfLaunch, endDate, clientDetails) {
    const ad = {
        adId: advertisements.length + 1,
        title,
        content,
        targetAudience,
        budget,
        engagement: {
            likes: 0,
            comments: 0,
            shares: 0,
        },
        dateOfLaunch,
        endDate,
        clientDetails: {
            name: "",
            followersCount: 0,
            industry: "",
            contactInfo: ""
        }
    };


    try {
        advertisements.push(ad);
        return {
            message: 'Advertisement was created succesfully✅',
            ad
        }
    }
    catch (error) {
        return {
            message: 'Failed to create advertisment❌',
            error
        }
    }
};

// Manages advertisements by listing advertisements according to status
function manageAdvertisements() {
    const todaysDate = Date.now().toString();

    //Intializing empty arrays to store advertisements by status
    const ongoingAds = [];
    const upcomingAds = [];
    const completedAds = [];
    const deletedAds = [];

    for (let i = 0; i < advertisements.length; i++) {
        const ad = advertisements[i];
        if (ad.id > 0) {
            // Retrieving Launch Date & End Date of Advertisement
            const startDate = ad.dateOfLaunch;
            const endDate = ad.endDate;
            // Condition checks if ad has been launched, but yet to end, making ad status ongoing
            if (startDate <= todaysDate && endDate >= todaysDate) {
                ongoingAds.push(ad);
            }
            // Condition indicates that ad's launch date is in the future hence its status is upcoming
            else if (startDate > todaysDate) {
                upcomingAds.push(ad);
            }
            //Condition indicates that ad's endDate has passed, hence making ad completed
            else if (endDate < todaysDate) {
                completedAds.push(ad);
            }
        }
        else if (ad.id < 0) {
            deletedAds.push(ad);
        }
    }
    return {
        ongoing: ongoingAds,
        upcoming: upcomingAds,
        completed: completedAds,
        deleted: deletedAds,
        all: advertisements

    }
}
// deletes ad by id
function deleteAdvertisement(adId) {

    // loops through advertisements array to retrieve ad with corresponding Id
    for (let i = 0; i < advertisements.length; i++) {

        if (advertisements[i].id === adId) {
            const ad = advertisements[i];

            const currentDate = Date.now();
            const adEndDate = new Date(ad.endDate).getTime;

            // if user wants to delete an advertisement, but the schduled endDate has yet to pass, it will alert user
            if (currentDate <= adEndDate) {
                return {
                    message: `The end date for the advertisement "${ad.title}" has not passed yet.`
                };
            }

            const userResponse = prompt(`Are you sure you want to delete the advertisement "${ad.title}"? (yes/no):`);

            if (userResponse === 'yes') {
                // setting ad.id with value, -1 for it to be considered as deleted so it wont be logged when we use the manageAdvertisement function
                ad.id = -1;
                return {
                    message: `Advertisement "${ad.title}" for "${ad.clientDetails.name} has been deleted successfully ✅`
                };
            }
            else {
                return {
                    // when user repsonses no, it cancel deletion process
                    message: "Advertisement deletion cancelled ❌"
                };
            }
        }

    }
    return {
        message: " Advertisement was not found."
    }
}

// tracks advertisement's engagement by advertisement id
function trackEngagement(adId) {
    for (let i = 0; i < advertisements.length; i++) {
        if (advertisements[i].id == adId) {
            const ad = advertisements[i];
            return {
                message: 'Engagement statistics retrieved succesfully',
                likes: advertisements[i].engagement.likes,
                comments: advertisements[i].engagement.comments,
                shares: advertisements[i].engagement.shares
            };
        }
    }
    return {
        message: "Ad was not found."
    };
}

function retrieveBestPerfomingAd() {
    if (advertisements.length === 0) {
        return {
            message: "No advertisements found."
        };
    }

    // assumes that first ad within the advertisement array has the best engagment
    let bestAd = advertisements[0];
    let bestEngagement = bestAd.engagement.likes + bestAd.engagement.comments + bestAd.engagement.shares;

    // loops through the array and compares engagement with the first ad which is deemed "bestAd" and if the engagement value is higher, the ad is assigned to bestAd
    for (let i = 1; i < advertisements.length; i++) {
        const currentAd = advertisements[i];
        const currentEngagement = currentAd.engagement.likes + currentAd.engagement.comments + currentAd.engagement.shares;
        if (currentEngagement > bestEngagement) {
            bestAd = currentAd;
            bestEngagement = currentEngagement;
        }
    }

    return {
        message: `${bestAd.title} is the best perfoming advertisement`,
        title: bestAd.title,
        likes: bestAd.engagement.likes,
        comments: bestAd.engagement.comments,
        shares: bestAd.engagement.shares
    }
}



module.exports = {
    createAdvertisement,
    manageAdvertisements,
    deleteAdvertisement,
    trackEngagement,
    retrieveBestPerfomingAd
};








