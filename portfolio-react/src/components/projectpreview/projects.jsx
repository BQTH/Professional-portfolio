import React from 'react'
import axios from 'axios'

export default class ProjectList extends React.Component {

    state = {
        projects: []
    }

    componentDidMount() {
        axios.get(`https://bqth-api.herokuapp.com/projects`)
            .then(res => {
                //save gotten person data from api in a variable
                const projects = res.data;
                //set state to persons from the json placeholder api
                this.setState({ projects });
            })
    }

    render() {
        return (
            <div>
                {this.state.projects.map(project =>
                    <div className="projectimg"
                        style={{
                            backgroundImage: `url(${project.urlbackimg})`
                        }}>

                        <div className="row ">
                            <div className="col l6 m12 ">

                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <a href="/designs/" ><button>See more</button></a>

                            </div>
                            <div className="col l6 m12 ">

                                {console.log(project.urlpreviewimg.length)}

                                {project.urlpreviewimg.length === 3 ? (
                                    <div>
                                        <img className="project-img 3" alt="" src={project.urlpreviewimg[0]} />
                                        <img className="project-img 3" alt="" src={project.urlpreviewimg[1]} />
                                        <img className="project-img 3" alt="" src={project.urlpreviewimg[2]} />
                                    </div>
                                ) : project.urlpreviewimg.length === 2 ? (
                                    <div>
                                        <img className="project-img 2" alt="" src={project.urlpreviewimg[0]} />
                                        <img className="project-img 2" alt="" src={project.urlpreviewimg[1]} />
                                    </div>
                                ) : (
                                    <div>
                                        <img className="project-img 1" alt="" src={project.urlpreviewimg[0]} />
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                )}
            </div>

        )
    }
}
