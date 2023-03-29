import AsyncStorage from '@react-native-async-storage/async-storage';

import { Base_URL } from './constants';

export const signup = async (email, password) => {

    const response = await fetch(`${Base_URL}register/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({

        })
    })

    return response;
};

export const login = async (email, password) => {

    var collectData = {
        email: email,
        password: password
    };
    const response = await fetch(`${Base_URL}user/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const googleLogin = async (TOKEN) => {

    const response = await fetch(`${Base_URL}register/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${TOKEN}`,
        }
    })

    return response;
};

export const getCurrentUser = async (TOKEN) => {

    const response = await fetch(`${Base_URL}get_user_data/`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${TOKEN}`,
        }
    })

    return response;
};

export const postTrip = async (ticketNumber, arrivalDestinationDate, arrivalDestinationAirport, pnrNumber, arrivalDateAtOrigin, originAirport, originCountry, destinationCountry, itemType, fragilePackage) => {

    const TOKEN = await AsyncStorage.getItem('currentUserFirebaseToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');

    const response = await fetch(`${Base_URL}manage_trip/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${TOKEN}`,
        },
        body: JSON.stringify({
            ticket_number: ticketNumber,
            arrival_date_at_destination: arrivalDestinationDate,
            destination_airport: arrivalDestinationAirport,
            pnr_number: pnrNumber,
            arrival_date_at_origin: arrivalDateAtOrigin,
            origin_airport: originAirport,
            origin_country: originCountry,
            destination_country: destinationCountry,
            item_type: itemType,
            will_accept_fragile_package: fragilePackage,
            status: "Active",
            user: USER_ID,
        })
    })

    return response;
};
export const UpdateTrip = async (ticketNumber, arrivalDestinationDate, arrivalDestinationAirport, pnrNumber, arrivalDateAtOrigin, originAirport, originCountry, destinationCountry, itemType, fragilePackage,id) => {

    const TOKEN = await AsyncStorage.getItem('currentUserFirebaseToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');
    const response = await fetch(`${Base_URL}get_trip/${id}/`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${TOKEN}`,
        },
        body: JSON.stringify({
            ticket_number: ticketNumber,
            arrival_date_at_destination: arrivalDestinationDate,
            destination_airport: arrivalDestinationAirport,
            pnr_number: pnrNumber,
            arrival_date_at_origin: arrivalDateAtOrigin,
            origin_airport: originAirport,
            origin_country: originCountry,
            destination_country: destinationCountry,
            item_type: itemType,
            will_accept_fragile_package: fragilePackage,
            status: "Active",
            user: USER_ID,
        })
    })

    return response;
};
export const DeleteTrip = async (id) => {

    const TOKEN = await AsyncStorage.getItem('currentUserFirebaseToken');
    const response = await fetch(`${Base_URL}get_trip/${id}/`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${TOKEN}`,
        },
    })

    return response;
};
export const DeleteDeal = async (id) => {

    const TOKEN = await AsyncStorage.getItem('currentUserFirebaseToken');
    const response = await fetch(`${Base_URL}get_deal/${id}/`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${TOKEN}`,
        },
    })

    return response;
};
export const postItemType = async (name, height, width, length, weight, quantity) => {

    const TOKEN = await AsyncStorage.getItem('currentUserFirebaseToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');
console.log(JSON.stringify({
    name: name,
    height: height,
    width: width,
    length: length,
    weight: weight,
    quantity: quantity,
    status: null
}))
    const response = await fetch(`${Base_URL}manage_item/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${TOKEN}`,
        },
        body: JSON.stringify({
            name: name,
            height: height,
            width: width,
            length: length,
            weight: weight,
            quantity: quantity,
            status: null
        })
    })

    return response;
};

export const postAD = async (productName, uri, countryName, shopName, itemCost, ITEM_COST_CURRENCY, itemQuantity, comment, ITEM_ID, sellerFee) => {

    const TOKEN = await AsyncStorage.getItem('currentUserFirebaseToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');
    
    const data = new FormData();

    data.append('product_name', productName);
    data.append('product_image', {
        uri: uri,
        type: "image/png",
        name: uri,
    });
    data.append('country_name', countryName);
    data.append('shop_name', shopName);
    data.append('product_price', parseFloat(itemCost).toFixed(2));
    data.append('currency_type', ITEM_COST_CURRENCY);
    data.append('product_quantity', itemQuantity);
    data.append('comments', comment);
    data.append('seller_fee', parseFloat(sellerFee).toFixed(2));
    data.append('status', "Agree");
    data.append('item_type', ITEM_ID);
    data.append('user', USER_ID);

    const response = await fetch(`${Base_URL}manage_deal/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'multipart/form-data',
            'Authorization': `JWT ${TOKEN}`
        },
        body: data,
    })

    return response;
};
export const UpdateAD = async (productName, uri, countryName, shopName, itemCost, ITEM_COST_CURRENCY, itemQuantity, comment, ITEM_ID, sellerFee,id) => {

    const TOKEN = await AsyncStorage.getItem('currentUserFirebaseToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');
    
    const data = new FormData();

    data.append('product_name', productName);
    data.append('product_image', {
        uri: uri,
        type: "image/png",
        name: uri,
    });
    data.append('country_name', countryName);
    data.append('shop_name', shopName);
    data.append('product_price', parseFloat(itemCost).toFixed(2));
    data.append('currency_type', ITEM_COST_CURRENCY);
    data.append('product_quantity', itemQuantity);
    data.append('comments', comment);
    data.append('seller_fee', parseFloat(sellerFee).toFixed(2));
    data.append('status', "Agree");
    data.append('item_type', ITEM_ID);
    data.append('user', USER_ID);
    const response = await fetch(`${Base_URL}get_deal/${id}/`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'multipart/form-data',
            'Authorization': `JWT ${TOKEN}`
        },
        body: data,
    })

    return response;
};

export const getOpenDeals = async () => {

    const TOKEN = await AsyncStorage.getItem('currentUserFirebaseToken');
    console.log(TOKEN,"aiaenfiefiewnf")
    const response = await fetch(`${Base_URL}get_all_deals/`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${TOKEN}`,
        }
    })

    return response;
};
export const getFlightDetails = async () => {

    const TOKEN = await AsyncStorage.getItem('currentUserFirebaseToken');

    const response = await fetch(`${Base_URL}get_all_trips/`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${TOKEN}`,
        }
    })

    return response;
};
export const getDealHistory = async () => {
    const TOKEN = await AsyncStorage.getItem('currentUserFirebaseToken');

    const response = await fetch(`${Base_URL}completed_deal/`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${TOKEN}`,
        }
    })

    return response;
};
export const Updateprofile = async (firstname, lastname, countryname, statename, profilephoto) => {

    const TOKEN = await AsyncStorage.getItem('currentUserFirebaseToken');
    const FirebaseID=AsyncStorage.getItem('currentUserFirebaseID');
    const USER_ID = await AsyncStorage.getItem('currentUserID');
    const data = new FormData();

    data.append('id', USER_ID);
    data.append('firebase_user_uid',FirebaseID._z);
    data.append('profile_picture', {
        uri: profilephoto,
        type: "image/png",
        name: profilephoto,
    });
    data.append('first_name',firstname);
    data.append('last_name',lastname);
    data.append('country', countryname);
    data.append('states', statename);

    const response = await fetch(`${Base_URL}update_user_data/`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'multipart/form-data',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: data,
    })
    return response;
};

export const getOpenDealSingle = async (ITEM_ID) => {

    const TOKEN = await AsyncStorage.getItem('currentUserFirebaseToken');

    const response = await fetch(`${Base_URL}get_deal/${ITEM_ID}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${TOKEN}`,
        }
    })

    return response;
};
export const getMatches = async (id) => {

    const TOKEN = await AsyncStorage.getItem('currentUserFirebaseToken');

    const response = await fetch(`${Base_URL}get_data/?ids=${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${TOKEN}`,
        }
    })

    return response;
};

