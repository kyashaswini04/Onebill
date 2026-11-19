
export function getDistanceKm(lat1, lon1, lat2, lon2) {
    const toRad = (degrees) => (degrees * Math.PI) / 180;

    const earthRadiusKm = 6371;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) ** 2;

    return (
        earthRadiusKm *
        2 *
        Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    );
}

export function getNearbyRestaurants(
    restaurants,
    userLat,
    userLon,
    radiusKm = 5
) {
    return restaurants
        .map((restaurant) => ({
            ...restaurant,
            distance: getDistanceKm(
                userLat,
                userLon,
                restaurant.latitude,
                restaurant.longitude
            ),
        }))
        .filter((restaurant) => restaurant.distance <= radiusKm)
        .sort((a, b) => a.distance - b.distance);
}
