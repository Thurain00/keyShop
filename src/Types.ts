export type ITEMTYPE={
  "id": number,
  "title": string,
  "price":number,
  "description": string,
  "category": string,
  "image": string,
  "rating": RATING
}

export type RATING={
   "rate": number,
    "count": number
}