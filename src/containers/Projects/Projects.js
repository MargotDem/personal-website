import React, { Component } from 'react'

import Contact from '../../components/Contact'
import Project from './Project'
import projectOcc from '../../img/project-occ.png'
import projectLexicode from '../../img/project-lexicode.png'
import projectBT from '../../img/project-BT.png'

import './styles/projects.css'

export default class Projects extends Component {
	render () {
		return (
			<div>
	      		<div className='projects-top-container'>
	      			<div className='projects-perso'><span className='projects-perso-P'>P</span>ersonal projects</div>
	      			<div className='projects-top-content'>
	      				<Project
	      					id={1}
	      					name='Open Carte Comptable'
	      					url='http://opencartecomptable.fr/'
	      					description='description arzegt azrgehtryt nzteyrhtzt atezrht zefzgqrshtd ffze tsy(ru§it azretrg azegr zer er aerzteth zreg'
	      					picUrl={projectOcc}
	      					githubUrl={'https://github.com/MargotDem/opencartecomptable'}
	      				/>
	      				<Project
	      					id={2}
	      					name='Lexicode'
	      					url='https://lexicode.herokuapp.com/'
	      					description='zerghtjyehrtyt ouihgv oihgu'
	      					picUrl={projectLexicode}
	      					githubUrl={'https://github.com/MargotDem/lexicode'}
	      				/>
	      			</div>
	      		</div>
	      		<div className='projects-bottom-container'>
	        		<div className='projects-bottom-wrapper'>
	      				<div className='projects-contributed'><span className='projects-contributed-P'>P</span>rojects I’ve contributed to</div>
	      				<div className='projects-bottom-content'>
	      					<Project
	      						id={3}
		      					name='Brother Tongue'
		      					url='https://brothertongue.com/#/'
		      					description='ezfgr aeztr ergttdhg tezr taergzt'
		      					picUrl={projectBT}
	      					/>
	      				</div>
	        		</div>
	      		</div>
	      		<Contact />
      		</div>
    	)
	}
}
