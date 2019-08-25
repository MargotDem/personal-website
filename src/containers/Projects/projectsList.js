import projectOcc from '../../img/project-occ.png'
import projectLexicode from '../../img/project-lexicode.png'
import projectFlashcardz from '../../img/project-flashcardz.png'
import projectAdonis from '../../img/project-adonis.png'
import projectBT from '../../img/project-BT.png'
import projectOvrsea from '../../img/project-ovrsea.png'
import react from '../../img/icons/react.png'
import php from '../../img/icons/php.png'
import sql from '../../img/icons/sql.png'
import js from '../../img/icons/js.png'
import bootstrap from '../../img/icons/bootstrap.png'
import git from '../../img/icons/git.png'
import terminal from '../../img/icons/cmdline.png'
import nodejs from '../../img/icons/nodejs.png'
import expressjs from '../../img/icons/expressjs.png'
import sass from '../../img/icons/sass.png'
import webpack from '../../img/icons/webpack.png'
import adonis from '../../img/icons/adonis.png'
import laravel from '../../img/icons/laravel.png'
import redux from '../../img/icons/redux.png'
import typescript from '../../img/icons/typescript.png'
import graphql from '../../img/icons/graphql.png'
import semanticUI from '../../img/icons/semanticUI.png'
import apolloGraphql from '../../img/icons/apolloGraphql.png'

export const PERSO_PROJECTS = [
    {
      id: 1,
      name: 'Open Carte Comptable',
      url: 'http://www.opencartecomptable.fr',
      description: 'projects.occ',
      picUrl: projectOcc,
      githubUrl: 'https://github.com/MargotDem/opencartecomptable',
      icons: {
        js,
        react,
        php,
        laravel,
        sql,
        bootstrap
      }
    },
    {
      id: 2,
      name: 'Flashcardz',
      url: 'https://the-amazing-flashcardz.herokuapp.com',
      description: 'projects.flashcardz',
      picUrl: projectFlashcardz,
      githubUrl: 'https://github.com/MargotDem/flashcardz',
      icons: {
        js,
        nodejs,
        react,
        adonis,
        sql,
        webpack,
        sass
      }
    },
    {
      id: 3,
      name: 'adonis-react-app',
      url: 'https://github.com/MargotDem/adonis-react-app',
      description: 'projects.adonis',
      picUrl: projectAdonis,
      githubUrl: 'https://github.com/MargotDem/adonis-react-app',
      icons: {
        js,
        adonis,
        nodejs,
        react,
        webpack,
        sass
      }
    },
    {
      id: 4,
      name: 'Lexicode',
      url: 'https://lexicode.herokuapp.com/',
      description: 'projects.lexicode',
      picUrl: projectLexicode,
      githubUrl: 'https://github.com/MargotDem/lexicode',
      icons: {
        js,
        react,
        nodejs,
        sql,
        expressjs
      }
    }
]
  
export const CONTRIBUTED_PROJECTS = [
    {
        id: 5,
        name: 'Brother Tongue',
        url: 'https://brothertongue.com/#/',
        description: 'projects.bt',
        picUrl: projectBT,
        githubUrl: false,
        icons: {
          js,
          react,
          git,
          terminal,
          bootstrap
        }
    },
    {
        id: 6,
        name: 'Ovrsea',
        url: 'https://www.ovrsea.com',
        description: 'projects.ovrsea',
        picUrl: projectOvrsea,
        githubUrl: false,
        icons: {
            js,
            react,
            git,
            redux,
            typescript,
            graphql,
            apolloGraphql,
            semanticUI
        }
    }
]
