import { Dimensions, SafeAreaView, ScrollView } from 'react-native';
import React from 'react'
import ProfileGreeting from '../components/ProfileGreeting.js'
import DailyGoals from '../components/DailyGoals.js'
import CoursesContainer from '../components/CoursesContainer.js'
import GenericButton from '../components/GenericButton.js'  

function CourseViewScreen(props) {
    const GOALS = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          course: "Chemistry",
          title: "Learn about the noble gases",
          isComplete: true
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          course: "Biology",
          title: "Discover the powerhouse of the cell",
          isComplete: false
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          course: "Ancient Greek",
          title: "Explore Sparta",
          isComplete: false
        },
      ];

      const COURSES = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          subject: "Chemistry",
          image: null,
          progress: 75.0,
          color: "red"
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          subject: "Biology",
          image: null,
          progress: 75.0,
          color: "#2B2B2B"
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          subject: "Ancient Greek",
          image: null,
          progress: 75.0,
          color: "#2B2B2B"
        },
      ];

    return (
        <SafeAreaView style={styles.container}>
            <ProfileGreeting />
            <DailyGoals goals={GOALS} />
            <CoursesContainer courses={COURSES} />
        </SafeAreaView>
    );
}

const styles = {
    container: {
        height: "100%",
        width: "100%",
        display: "flex",
    },
}

export default CourseViewScreen;