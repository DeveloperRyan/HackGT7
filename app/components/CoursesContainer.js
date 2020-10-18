import React, { Component } from 'react'
import CourseCard from './CourseCard.js'

export default class CoursesContainer extends Component {
    constructor (props) {
        super(props),
        this.state = {
            courses: props.courses
        }
    }
    render() {
        return (
            this.state.courses.map((course) => (
              <CourseCard
                subject={course.subject} 
                description={course.description}
                image={course.image}
                progress={course.progress} 
                color={course.color} 
                key={course.id} 
                />
            ))
        );
    }
}
