import { StyleSheet } from "react-native";


export const badgeStyles = StyleSheet.create({
    badgeContainer: {
      backgroundColor: '#FFFFFF', // Change to your preferred badge background color
      borderRadius: 20,
      paddingVertical: 12,
      paddingHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 12,
      marginBottom: 20,
      width: 110, // Increased width
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1,
      elevation: 2,
    },
    iconCircle: {
      width: 41, // Slightly larger to keep the aspect ratio
      height: 41, // Slightly larger to keep the aspect ratio
      borderRadius: 22, // Slightly larger to keep the aspect ratio
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 8,
    },
    badgeText: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#2E384D', // Change to your preferred text color
    },
    badgeNumber: {
      color: '#2E384D',
      fontWeight: 'bold',
      fontSize: 15, // Slightly larger for better visibility
      marginBottom: 4, // Add some space between the number and the label
    },
  });
  
  // Define color constants for the icons
 export const ICON_COLORS = {
    purple: '#8C54FF',
    orange: '#FF8A65',
    yellow: '#FFCD29',
  };
  
  




export const styles = StyleSheet.create({
  settingsIcon: {
    position: 'absolute', // Position the icon over the other content
    top: 55, // Adjust as needed
    right: 25, // Adjust as needed
    zIndex: 10, // Make sure the icon floats above other elements
  },
  progressCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the cards
    alignItems: 'center',
    paddingTop: 29, // This will add space below the "Today's Goals" title
    paddingBottom: 20, // This adds some padding below the cards before the next section
  },
    sectionBackground: {
        backgroundColor: '#1a1a1a',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        margin: 10,
      },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        paddingHorizontal: 8, 
      },
        section: {
        marginBottom: 50,
        backgroundColor: '#2dd881', // White background for each section
        borderRadius: 12,
        padding: 15,
        shadowColor: '#000', // Shadow for a subtle depth effect
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        width:375,
        left:8
      },
        subtitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 9,
      },
        content: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 10,
        paddingLeft: 20, // Indent content for better readability
        alignContent: "center",
        alignSelf:"center"
      },
        safeArea: {
        flex: 1,
        backgroundColor: 'red', // or any other background color you want for the safe area
      },
      summaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      },
      summaryText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#00f',
      },
      allOpportunitiesText: {
        fontSize: 16,
        color: '#000',
      },
       container: {
        flex: 1,
        backgroundColor: '#F1F6F7',
      },
      header: {
        alignItems: 'flex-start',
        alignSelf:'flex-end',

      },
      headerTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      headerTitle: {
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 20,
      },
      tabsContainer: {
        flexDirection: 'row',
        backgroundColor: '#242c44',
        paddingVertical: 10,
      },
      tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
      },
      selectedTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#2dd881',
      },
      tabText: {
        fontWeight: '600',
        color:"#fff"
      },
      opportunitiesHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 35,
        paddingBottom:20
      },
      opportunitiesTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
      },
      dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: 'white',
      },
      dropdownText: {
        marginRight: 5,
        fontSize: 16,
        color: 'black',
      },
      discoverMoreTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2E384D',
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginTop: 30,
      },
      articleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
      },
      articleCard: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        overflow: 'hidden',
        margin: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
        alignItems: 'center',
      },
      articleImageContainer: {
        width: 90, // Smaller width for the image container
        height: 90, // Smaller height to match the width
        borderRadius: 15, // Fully rounded corners
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      },
      articleImage: {
        width: '88%', // The image will fill the container
        height: '88%',
        resizeMode: 'cover', // Ensures the image covers the container space
        borderRadius: 15 // Fully rounded corners
      },   
      articleContent: {
        flex: 1,
        padding: 10,
      },
      articleTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2E384D',
      },
      interactions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      },
      interactionText: {
        fontSize: 16,
        color: '#2E384D',
      },
    });
      


      export const accountStyles = StyleSheet.create({
        root: {
            flex: 1,
            backgroundColor:'#0E0D0D'
        },
        header: {
            alignItems: 'center',
            paddingTop: 60,
            paddingBottom: 17,
            color:'#E22E2'
          },
          avatarShadow: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.3,
            shadowRadius: 20,
            elevation: 10,
          },
        userInfo: {
          flexDirection: 'row',
          paddingVertical: 18,
          color:'#E2E2E2'
        },
        bordered: {
          borderBottomWidth: 1,
          borderColor: "#0B99C1"
        },
        section: {
          flex: 1,
          alignItems: 'center'
        },
        space: {
          marginBottom: 3,
          color:'#E2E2E2'
        },
        separator: {
          backgroundColor: "transparent",
          alignSelf: 'center',
          flexDirection: 'row',
          flex: 0,
          width: 35,
          height: 42,
        justifyContent: "center",
        alignItems: "center",
        },
        buttons: {
          flexDirection: 'row',
          paddingVertical: 50,
          justifyContent: "center",
          fontSize: 16,
          fontWeight: 'bold', 
          borderRadius: 20
        },
        
        text: {
          paddingVertical: 20,
          fontSize: 35,
          fontWeight: 'bold',
          color:'#4f5d75'
        },
        rating:{
          fontSize: 16,
          fontWeight: 'bold',
          color:'#E2E2E2',
          top:-21
        },
        edit: {
          left:220,
          top:170
        },
        settings: {
          left:4
        },
        row: {
        top: 60,
        flexDirection: 'row',
        left: 30,
        }
        })