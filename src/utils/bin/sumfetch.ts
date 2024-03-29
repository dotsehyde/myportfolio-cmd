import config from '../../../config.json';


const profile = async (args: string[]): Promise<string> => {

  return `
            <div style="display:inline-flex; align-items:center;">
            <img src="./pp_new.png" width="300px" style="border-radius:50%;"/>
            <div>
        My Profile
       -----------
        ABOUT ME
        ${config.name}
        <u><a href="${config.resume_url}" target="_blank">Download CV</a></u>
       爵 <u><a href="${config.repo}" target="_blank">Open GUI Version</a></u>
       -----------
        CONTACT ME
        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
        <u><a href="${config.social.github}" target="_blank">Visit My GitHub</a></u>
        <u><a href="${config.social.linkedin}" target="_blank">View My Linkedin Profile</a></u>                                                     
          </div>
          </div>
            `;

};

export default profile;
