export const ewiMap = {
    plate: { column: 0 },
    vin: { column: 1 },
    status: { column: 2 },
    company: { column: 3 },
    collectionDate: {
      column: 4,
      isDate: true,
    },
    brand: { column: 5 },
    model: { column: 6 },
    body: { column: 7 },
    version: { column: 8 },
    fuel: { column: 9 },
    color: { column: 10 },
    mileage: { column: 11 },
    prodYear: { column: 12 },
    firstRegDate: {
      column: 13,
      isDate: true,
    },
    keysNb: { column: 15 },
    damages: { column: 17 },
    comment: { column: 18 },
    eurotaxValue: { column: 19 },
    eurotaxNb: { column: 20 },
    eurotaxDate: {
      column: 21,
      isDate: true,
    },
    reservation: { column: 22 },
    rvStat: { column: 23 },
    auctionPricePlusFee: { column: 24 },
    fee: { column: 25 },
    salesPriceNoFee: { column: 26 },
    salesChannel: { column: 30 },
    buyersData: { column: 31 },
    vatId: { column: 32 },
    proformaDate: {
      column: 33,
      isDate: true,
    },
    paymentDate: {
      column: 34,
      isDate: true,
    },
    nac: { column: 35 },
    invoiceNb: { column: 36 },
    invoiceDate: {
      column: 37,
      isDate: true,
    },
    insurer: { column: 39 },
    ocExpirationDate: {
      column: 40,
      isDate: true,
    },
    refurbishment: { column: 45 },
    b2cPrice: { column: 47 },
    priceAcceptance: { column: 51 },
    location: { column: 60 },
  };

  // export const macadamMap = {
  //   macadamData: {column: 2, isDate: true},
  //   plate: { column: 3 },
  //   macadamNoPrice: {column: 11},
  //   macadamWithPrice: {column: 12},
  //   macadamMileage: {column: 14},
  // }

  export const macadamMap = {
    // macadamData: {column: 2, isDate: true},
    plate: { column: 4 },
    // macadamNoPrice: {column: 11},
    macadamWithPrice: {column: 13, isHyperlink: true},
    // macadamMileage: {column: 14},
  }

  export const commonMap = {
    ...ewiMap,
    ...macadamMap,
  }