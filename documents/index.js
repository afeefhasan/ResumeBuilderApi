module.exports = (values) => {
	const {
		// Profile-Information
		firstname,
		lastname,
		email,
		phone,
        title,
        address,
        links,

		// Education Information
		education,

		// Project Information...
		projects,

		// Experience Information
		experience,

		// Extra Information
		skills,
		honors
	} = values;

	let htmlTemplate = `
  <!DOCTYPE html>
    <html>
    <head>
    <title>${firstname}'s Resume</title>
	<meta charset="UTF-8"> 
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,500,600&display=swap" rel="stylesheet">
	<style>
	* {
		box-sizing: border-box;
		transition: 0.35s ease;
		font-style: normal;
	  }
	  .rela-block {
		width: 100%;
		display: block;
		position: relative;
		margin: auto;
		top: ;
		left: ;
		right: ;
		bottom: ;
		font-style: normal;
	  }
	  .rela-inline {
		display: inline-block;
		position: relative;
		margin: auto;
		top: ;
		left: ;
		right: ;
		bottom: ;
		font-style: normal;
	  }
	  .floated {
		display: inline-block;
		position: relative;
		margin: false;
		top: ;
		left: ;
		right: ;
		bottom: ;
		float: left;
	  }
	  .abs-center {
		display: false;
		position: absolute;
		margin: false;
		top: 50%;
		left: 50%;
		right: false;
		bottom: false;
		-webkit-transform: translate(-50%, -50%);
				transform: translate(-50%, -50%);
		text-align: center;
		width: 88%;
		font-style: normal;
	  }
	  body {
		font-family: 'Roboto Slab';
		font-size: 18px;
		letter-spacing: 0px;
		font-weight: 400;
		line-height: 28px;
		background-size: cover;
		font-style: normal;
	  }
	  
	  .caps {
		text-transform: uppercase;
	  }
	  .justified {
		text-align: justify;
	  }
	  p.light {
		color: #777;
		font-size: 14px;
		font-style: normal;
	  }
	  h2 {
		font-family: 'Roboto Slab', serif;
		font-size: 30px;
		letter-spacing: 5px;
		font-weight: 600;
		line-height: 40px;
		color: #000;
		font-style: normal;
	  }
	  h3 {
		font-family: 'Roboto Slab', serif;
		font-size: 21px;
		letter-spacing: 1px;
		font-weight: 600;
		line-height: 28px;
		color: #000;
	  }
	  .page {
		width: 90%;
		max-width: 1200px;
		margin: 80px auto;
		background-color: #fff;
		box-shadow: 6px 10px 28px 0px rgba(0,0,0,0.4);
	  }
	  .top-bar {
		height: 220px;
		background-color: #848484;
		color: #fff;
	  }
	  .name {
		display: false;
		position: absolute;
		margin: false;
		top: false;
		left: calc(350px + 5%);
		right: 0;
		bottom: 0;
		height: 120px;
		text-align: center;
		font-family: 'Roboto Slab';
		font-size: 58px;
		letter-spacing: 8px;
		font-weight: 100;
		line-height: 60px;
		font-style: normal;
	  }
	  .name div {
		width: 94%;
	  }
	  .side-bar {
		display: false;
		position: absolute;
		margin: false;
		top: 60px;
		left: 2%;
		right: false;
		bottom: 0;
		width: 380px;
		background-color: #f7e0c1;
		padding: 320px 30px 50px;
	  }
	  .mugshot {
		display: false;
		position: absolute;
		margin: false;
		top: 50px;
		left: 70px;
		right: false;
		bottom: false;
		height: 210px;
		width: 210px;
	  }
	  .mugshot .logo {
		margin: -23px;
	  }
	  .logo {
		display: false;
		position: absolute;
		margin: false;
		top: 0;
		left: 0;
		right: false;
		bottom: false;
		z-index: 100;
		margin: 0;
		color: #000;
		height: 250px;
		width: 250px;
	  }
	  .logo .logo-svg {
		height: 100%;
		width: 100%;
		stroke: #000;
		cursor: pointer;
	  }
	  .logo .logo-text {
		display: false;
		position: absolute;
		margin: false;
		top: 60%;
		left: ;
		right: 20%;
		bottom: ;
		cursor: pointer;
		font-family: 'Roboto Slab', serif;
		font-size: 60px;
		letter-spacing: 0px;
		font-weight: 400;
		line-height: 58.333333333333336px;
		font-style: normal;
	  }
	  .social {
		padding-left: 10px;
		margin-bottom: 0px;
		cursor: pointer;
	  }
	  
	  .side-header {
		font-family: 'Roboto Slab', serif;
		font-size: 18px;
		letter-spacing: 4px;
		font-weight: 600;
		line-height: 28px;
		margin: 60px auto 10px;
		padding-bottom: 5px;
		border-bottom: 1px solid #888;
	  }
	  .list-thing {
		padding-left: 20px;
		margin-bottom: 5px;
	  }
	  .content-container {
		margin-right: 0;
		width: calc(95% - 350px);
		padding: 25px 40px 50px;
	  }
	  .content-container > * {
		margin: 0 auto 25px;
	  }
	  .content-container > h3 {
		margin: 0 auto 5px;
	  }
	  .content-container > p.long-margin {
		margin: 0 auto 50px;
	  }
	  .title {
		width: 80%;
		text-align: center;
	  }
	  .separator {
		width: 300px;
		height: 2px;
		background-color: #999;
	  }
	  .greyed {
		background-color: #ddd;
		width: 100%;
		max-width: 580px;
		text-align: center;
		font-family: 'Roboto Slab';
		font-size: 18px;
		letter-spacing: 6px;
		font-weight: 600;
		line-height: 28px;
	  }
	  @media screen and (max-width: 1150px) {
		.name {
		  color: #fff;
		  font-family: 'Roboto Slab';
		  font-size: 38px;
		  letter-spacing: 6px;
		  font-weight: 100;
		  line-height: 48px;
		}
	  }	  
	</style>
    </head>
	<body>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <div class="rela-block page">
        <div class="rela-block top-bar">
			<div class="caps name"><div class="abs-center">${firstname} ${lastname}</div></div>
        </div>
        <div class="side-bar">
            <div class="mugshot">
                <div class="logo">
                    <svg viewbox="0 0 80 80" class="rela-block logo-svg">
                        <path d="M 10 10 L 52 10 L 72 30 L 72 70 L 30 70 L 10 50 Z" stroke-width="2.5" fill="none"/>
                    </svg>
                    <p class="logo-text">${firstname[0]}${lastname[0]}</p>
                </div>
			</div>
			<!--
            <p class="mb-1">123 My Place Drive</p>
            <p class="mb-1">Astoria, New York 11105</p>
			<p class="mb-1">1-800-CALLPLZ</p>
			-->
			<p class="mb-1"><span style="padding-right:10px;"><i class="fas fa-envelope"></i></span>${email}</p>
			<p class="mb-1"><span style="padding-right:10px;"><i class="fas fa-phone-square-alt"></i></span>${phone}</p>
            <p class="mb-1"><span style="padding-right:10px;"><i class="fas fa-map-marker-alt"></i></span>${address}</p>
			`;
        if (skills !=null){
            htmlTemplate+=`<p class="rela-block caps side-header">Skills</p>`;
        }   

	
	if (skills.programinglanguages != null && skills.programinglanguages.length>0 )
		htmlTemplate += `
				<p class="rela-block list-thing">Programming Languages : ${skills.programinglanguages.map(skill =>skill)}</p>`;
	if ( skills.libraries != null && skills.libraries.length>0 )
		htmlTemplate += `<p class="rela-block list-thing">Libraries : ${skills.libraries.map(skill =>skill)}</p>`;
    ;
	if (skills.tools != null && skills.tools.length>0)
		htmlTemplate += `<p class="rela-block list-thing">Tools :  ${skills.tools.map(skill =>skill)}</p>`;

	if ( skills.databases != null && skills.databases.length >0 )
		htmlTemplate += `<p class="rela-block list-thing">Databases : ${skills.databases.map(skill =>skill)}</p>`;

	
	htmlTemplate += `
  			</div>
			<div class="rela-block content-container">
			<!--
			<h2 class="rela-block caps title">${title}</h2>
			<div class="rela-block separator"></div>
			-->
			`;
          
            if(links != null && links.length>0){
				htmlTemplate += `
                <div>
                    <div class="rela-block caps greyed">Profile</div>
                    <div>
                        <p class="rela-block list-thing">${links.map(link => `<a href="${link.url}" target="_blank">${link.name}</a> |`)} </p>
                    </div>
                </div>
				`;
			}
                
            

			if(education != null && education.length>0 ){
				htmlTemplate += `
                <div>
                    <div class="rela-block caps greyed">Education</div>
                    <div>
                        ${education.map(item =>
							`
                            <div>
                                <h3 class="mb-0">${item.Institutename}</h3>
                                <p class="mb-0">${item.location}</p>
                                <p class="text-muted light mt-0 mb-1">${item.start}<span class="mx-2">to</span>${item.end}</p>
                                <p class="justified mt-0 mb-1" style="font-size: 17px;">${item.degree}</p>
                                <p class="justified mt-0 mb-3" style="font-size: 17px;">${item.program}</p>
                            </div>
							`
                            )}
                    </div>
                </div>
				`;
						}
            
            

			if(experience != null && experience.length>0){
				htmlTemplate += `
                <div>
                    <div class="rela-block caps greyed">Experience</div>
                    <div>
                        ${experience.map(exp =>
							`
                            <div>
                                 <h3>${exp.employer}</h3>
									<p class="text-muted light mt-1 mb-2" style="font-size:17px;">${exp.jobtitle}<span class="ml-5 pl-5">Duration: ${exp.start} to ${exp.end}</span></p>
									<p class="justified" style="font-size:17px;">${exp.discription}</p>
    
                            </div>
							`
                            )}
                    </div>
                </div>
				`;
            
            }


            if( projects != null && projects.length>0 ){
				htmlTemplate += `
                <div>
                    <div class="rela-block caps greyed">Projects</div>
                    <div>
                        ${projects.map(pro =>
							`
                            <div>
                                
                                <h3>${pro.name}</h3>
								<p class="light mt-1 mb-2" style="font-size:17px;"><span class="mr-2"><i class="fas fa-link"></i></span>${pro.projectlink}</p>
								<p class="justified" style="font-size:17px;">${pro.description}</p>
                            
                            </div>
							`
                            )}
                    </div>
                </div>
				`;
            
            }
	
            if(honors != null && honors.length>0 ){
				htmlTemplate += `
                <div>
                    <div class="rela-block caps greyed">Honors</div>
                    <div>
                        ${honors.map(hon=>
							`
                               <p class="rela-block list-thing">${hon}</p>
                          
							`
                            )}
                    </div>
                </div>
				`;
            
            }
		
	htmlTemplate += `
        </div>
    </div>
    </body>
    </html>
  `;
	return htmlTemplate;
};