import React from 'react'
import "./Project.css"
function RenderingArrayOfObjects() {
	const data = [{
    name:"Project 1",
    pname:"Digital Clock",
    description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    github:"https://github.com/yash8780/React-Project/tree/master/my%20Project/Digital%20Clock/my-app",
    
  },
  {
    name:"Project 2",
    description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    pname:"Github Repo",
    github:"https://github.com/yash8780/React-Project/tree/master/my%20Project/Github%20Repo/my-app",
    
  },
  {
    name:"Project 3",
    description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    pname:"Number Game",
    github:"https://github.com/yash8780/React-Project/tree/master/my%20Project/Number%20Game/my-app",
    
  },
 
  ];
	const listItems = data.map(
		(element) => {
			return (
        <>
            <div className="box1">
            <div className='b1'>

              <h3>
                <b className="pr1">{element.name}</b>

              </h3>
              {element.pname}

              <h3>
                <b className="pr1"> Project Description</b>

              </h3>
              {element.description}
           
            </div>

            
            
            </div>
            <div className='mylink'>

            <div className='plink'>
              <a href={element.github}> Go to Github</a>
              </div>

            
            </div>
          </>
			)
		}
	)
	return (
		<div className='cont'>
			{listItems}
      
		</div>

	)
}
function App() {
	return (
		<div className="App1">
			
        <h1 id='t3'>Projects</h1>
				<RenderingArrayOfObjects />
			
		</div>
	);
}

export default App;
