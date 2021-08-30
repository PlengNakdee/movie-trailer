import sanityClient from '@sanity/client';

const options = {
  // dataset == 'staging' or 'production'
  // change to 'production' before merge to main
  dataset: 'production',
  projectId: 'f48h3rzb',
  apiVersion: '2021-03-25',
  useCdn: process.env.NODE_ENV === 'production'
  // useCdn === true, gives you fast response, it will get you
  // cached data
  // useCdn === false, give you little bit slower response, but
  // latest data
}

export default sanityClient(options);