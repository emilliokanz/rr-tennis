import client from '../apolloClient';
import { gql } from '@apollo/client';

export async function getProps() {
  const aboutUsData = await getAboutUsData();
  const campHomeData = await getCampHomeData();
  const homeHeroData = await getHomeHeroData();
  const coachData = await getCoachData();
  const eventData = await getTennisEventData();
  const pastEventData = await getPastEventsData();
  const upcomingEventData = await getUpcomingEvents();
  const locationData = await getLocationData();
  const juniorCampData = await getJuniorCampData();
  const adultCampData = await getAdultCampData();

  console.log(
    'received', 
    aboutUsData, 
    campHomeData, 
    homeHeroData,
    coachData,
    eventData,
    pastEventData,
    upcomingEventData,
    locationData,
    juniorCampData,
    adultCampData
  )

  return {
    props: {
      aboutUsData: aboutUsData.props.aboutUsData,
      campHomeData: campHomeData.props.campHomeData,
      homeHeroData: homeHeroData.props.homeHeroData,
      coachData: coachData.props.coachData,
      eventData: eventData.props.eventData,
      pastEventData: pastEventData.props.pastEventData,
      upcomingEventData: upcomingEventData.props.upcomingEventData,
      locationData: locationData.props.locationData,
      juniorCampData: juniorCampData.props.juniorCampData,
      adultCampData: adultCampData.props.adultCampData,
    },
  };
}

export async function getAboutUsData() {
  const { data } = await client.query({
    query: gql`
      query getAboutUsData {
        aboutUs {
          data {
            id
            attributes {
              title
              description
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      aboutUsData: data.aboutUs
    },
  };
}

export async function getCampHomeData() {
    const { data } = await client.query({
      query: gql`
        query getCampHomeData {
            camp {
              data {
                id
                attributes {
                  camp {
                    title
                    image {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            } 
        }
      `,
    });
  
    return {
      props: {
        campHomeData: data.camp
      },
    };
  }

  export async function getHomeHeroData() {
    const { data } = await client.query({
      query: gql`
        query getHomeHeroData {
          hero {
            data {
              id
              attributes {
                content {
                  id
                  title
                  description
                  link
                  image {
                    data {
                      id
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });
  
    return {
      props: {
        homeHeroData: data.hero
      },
    };
  }

  export async function getCoachData() {
    const { data } = await client.query({
      query: gql`
        query getCoachData {
          coach {
            data {
              id
              attributes {
                coach {
                  id
                  name
                  description
                  fullDescription
                  photo {
                    data {
                      id
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });
  
    return {
      props: {
        coachData: data.coach
      },
    };
  }

  export async function getTennisEventData() {
    const { data } = await client.query({
      query: gql`
        query getTennisEventData {
          event {
          	data {
              id
              attributes {
                title
                description
                image {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });
  
    return {
      props: {
        eventData: data.event
      },
    };
  }

  export async function getPastEventsData() {
    const { data } = await client.query({
      query: gql`
        query getPastEventsData {
          pastEvents {
          	data {
              id
              attributes {
                title
                description
                image {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });
  
    return {
      props: {
        pastEventData: data.pastEvents
      },
    };
  }

  export async function getUpcomingEvents() {
    const { data } = await client.query({
      query: gql`
        query getUpcomingEvents {
          upEvents {
          	data {
              id
              attributes {
                title
                description
                link
                age
                slug
                match
                admission
                prize
                date
                location
                image {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });
  
    return {
      props: {
        upcomingEventData: data.upEvents
      },
    };
  }

  export async function getLocationData() {
    const { data } = await client.query({
      query: gql`
        query getLocationData {
          location {
          	data {
              id
              attributes {
                location {
                  id
                  title
                  address
                  header {
                    data {
                      id
                      attributes {
                        url
                      }
                    }
                  }
                }
                gallery {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });
  
    return {
      props: {
        locationData: data.location
      },
    };
  }

  export async function getJuniorCampData() {
    const { data } = await client.query({
      query: gql`
        query getJuniorCampData {
          juniorCamps {
      			data {
              id
              attributes {
                title
                age
                description
                price
                color
              }
            }
          }
        }
      `,
    });
  
    return {
      props: {
        juniorCampData: data.juniorCamps
      },
    };
  }

  export async function getAdultCampData() {
    const { data } = await client.query({
      query: gql`
        query getAdultCampData {
          adultCamps {
      			data {
              id
              attributes {
                title
                age
                description
                price
                color
              }
            }
          }
        }
      `,
    });
  
    return {
      props: {
        adultCampData: data.adultCamps
      },
    };
  }