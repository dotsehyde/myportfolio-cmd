// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import profile from './sumfetch';


// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(',\n ');
  var c = '\n';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + ',\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  //   return `Welcome! Here are all the available commands:
  // \n${c}\n
  // [tab]: trigger completion.
  // [ctrl+l]/clear: clear terminal.\n
  // Type 'profile' to display profile.
  // `;
  return `
  about - a full profile about me
  banner - startup page
  bing - search on bing eg. 'bing house'
  cd - change directory
  cv - download my CV
  date - display current date
  duckduckgo - search on duckduckgo eg. 'duckduckgo car'
  echo - print out something eg. 'echo Hello World'
  email - send me an email
  github - visit my github profile
  google - search on google eg. 'google phone'
  gui - visit GUI version
  help - display list of avaliable commands
  linkedin - visit my linkedin profile
  ls - list directories/files
  profile - display summary about me
  projects - view all my projects
  quote - display daily quote
  readme - display my readme file
  reddit - search on reddit eg. 'reddit hacking'
  sudo - Hmmm... out of bounds
  twitter - visit my twitter profile
  `;
};

//  GUI Version
export const gui = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`, "_self");
  return 'Opening GUI Version...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, Welcome to my website!

I am a dedicated learner with experience from building mobile apps.
Patient and diligent with a passion for creating the best user experience possible.
I started my  developer career 3 years ago with deep interest in making mobile apps 
to solve problems our societies face. 

Languages & Frameworks:
<div style=" display: inline-flex; margin: 5px 0px; margin-bottom: 10px; font-size: 30px;">
              <span class="iconify" style="margin: 0px 5px;" data-icon="logos:javascript"></span>
              <span class="iconify" style="margin: 0px 5px;"  data-icon="logos:typescript-icon"></span>
              <span class="iconify" style="margin: 0px 5px;" data-icon="logos:swift"></span>
              <span
                class="iconify"
                style="margin: 0px 5px;" 
                data-icon="vscode-icons:file-type-dartlang"
              ></span>
              <span class="iconify" style="margin: 0px 5px;"  data-icon="logos:flutter"></span>
              <span class="iconify" style="margin: 0px 5px;"  data-icon="logos:google-cloud"></span>
              <span class="iconify" style="margin: 0px 5px;"  data-icon="logos:firebase"></span>
              <span
                class="iconify" style="margin: 0px 5px;" 
                data-icon="vscode-icons:file-type-vscode"
              ></span>
              <span
                class="iconify" style="margin: 0px 5px;" 
                data-icon="simple-icons:xcode"
                style="color: #197dd4"
              ></span>
            </div>
More about me:
Type 'profile' - View My Profile.
Type 'cv' - Download My CV.`;
};

export const cv = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest. 
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`${config.social.github}`);
  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`${config.social.linkedin}`);
  return 'Opening linkedin...';
};

//Twitter
export const twitter = async (args: string[]): Promise<string> => {
  window.open(`${config.social.twitter}`);
  return 'Opening twitter...';
};

//Readme
export const readme = async (args: string[]): Promise<string> => {
  window.open(`${config.readmeUrl}`);
  return 'Opening ReadMe...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `
  private let files:[String] = []
  Sorry! my files are private.🕵️‍♂️
  `;
};

export const cd = async (args: string[]): Promise<string> => {
  return `👀 You are not allowed to change directory.⚔️`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, did you mean vim?.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `You are a 👨‍💻`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  // window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied:😔 `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  <div style="display:inline-flex; align-items:center;">
  <img src="./pic.jpg" width="180px" style="border-radius:30%; margin-bottom:35px; margin-right:5px;"/>
  888888b.   8888888888 888b    888 888888        d8888 888b     d888 8888888 888b    888     
  888  "88b  888        8888b   888   "88b       d88888 8888b   d8888   888   8888b   888     
  888  .88P  888        88888b  888    888      d88P888 88888b.d88888   888   88888b  888     
  8888888K.  8888888    888Y88b 888    888     d88P 888 888Y88888P888   888   888Y88b 888     
  888  "Y88b 888        888 Y88b888    888    d88P  888 888 Y888P 888   888   888 Y88b888     
  888    888 888        888  Y88888    888   d88P   888 888  Y8P  888   888   888  Y88888     
  888   d88P 888        888   Y8888    88P  d8888888888 888   "   888   888   888   Y8888 d8b 
  8888888P"  8888888888 888    Y888    888 d88P     888 888       888 8888888 888    Y888 Y8P 
                                     .d88P                                                    
                                   .d88P"                                                     
                                  888P"                                                       
</div>

Type 'help' to see the list of available commands.
Type 'profile' to display profile.
Type 'gui' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> to use GUI version.
`;
};
