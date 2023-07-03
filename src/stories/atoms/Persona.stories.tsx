import * as React from 'react';
import { Persona, PersonaSize, IPersonaSharedProps} from '@fluentui/react';
import styles from './Persona.module.scss'
import {Personacard, Props} from './Persona';

export default {
    component: Personacard,
    title: "Atoms/Persona",
    tags: ['autodocs'],
  };





export const PersonaCard = () => { //import { Persona, PersonaSize, IPersonaSharedProps} from '@fluentui/react';
    const examplePersona: IPersonaSharedProps = {
        imageInitials: 'AL',
        text: 'Annie Lindqvist',
        secondaryText: 'Mai 2, Terça',
    }; return <div> <Persona
    className={styles['bt-persona-background']}
{...examplePersona}
size={PersonaSize.size40}
imageAlt="Annie Lindqvist, status is away">
    <svg className={styles['left-decoration']} xmlns="http://www.w3.org/2000/svg" width={85.5} height={70} viewBox="0 0 171 147" fill={'#201f1e'}>
                                <path opacity="0.6" d="M-48.9392 98.7344L-39.0715 95.7048L16.7281 144.234C19.0597 146.388 22.3544 146.806 25.3098 145.505L26.5474 144.545C28.4038 143.105 29.6193 140.842 29.7376 138.439L28.858 64.4917L29.0635 64.3346L93.896 100.242C96.6854 101.711 99.867 101.555 102.342 99.6351L102.548 99.4755C105.022 97.5569 105.965 94.5143 105.238 91.4459L88.6572 18.1177L88.863 17.9581L159.941 39.7757C162.457 40.4651 165.112 40.0583 167.175 38.459L168.412 37.4992C170.406 34.9619 170.824 31.6671 169.318 28.8714L135.745 -39.5375L142.856 -51.6576C144.989 -55.2937 143.714 -59.9188 140.444 -62.0066C140.285 -62.2124 140.285 -62.2124 139.918 -62.26C136.282 -64.3928 131.657 -63.1173 129.569 -59.8481C129.363 -59.6885 129.364 -59.6885 129.316 -59.322C115 -34.3501 97.0479 -11.5107 76.1234 8.34899C74.9334 8.94232 73.6958 9.90215 72.9832 11.1139C65.7867 18.0156 58.4785 24.3448 50.6425 30.4219C19.8714 54.6155 -15.3314 72.6701 -53.1553 83.5112C-57.2056 84.6748 -59.7974 88.9965 -58.4771 93.2548C-57.3152 97.3087 -52.9935 99.9006 -48.9407 98.7374L-48.9392 98.7344ZM13.8992 121.001L-21.9444 89.6862C-9.80727 84.8966 1.84809 79.4896 13.231 73.3027L13.8992 121.001ZM147.243 19.5707L101.078 5.17801C109.902 -4.30718 118.042 -14.2515 125.653 -24.4482L147.243 19.5707ZM75.2245 30.1805L86.1203 77.8699L43.8806 54.4888C49.3557 50.904 54.8776 46.9512 60.2381 42.7939C65.6001 38.6355 70.3896 34.5915 75.2241 30.1808L75.2245 30.1805Z"
                                />
                            </svg>
                            <svg className={styles['right-decoration']} xmlns="http://www.w3.org/2000/svg" width={85.5} height={70} viewBox="0 0 163 143" fill={'#201f1e'}>
                                <path opacity="0.6" d="M197.679 29.4534L188.84 34.7849L122.94 1.2309C120.156 -0.293153 116.858 0.100313 114.306 2.07888L113.338 3.31011C111.886 5.15695 111.256 7.64733 111.724 10.0076L130.504 81.5354L130.343 81.7376L58.7396 62.6194C55.6773 61.8705 52.6285 62.7931 50.6923 65.2557L50.5314 65.4605C48.5965 67.9215 48.4196 71.102 49.8686 73.9026L83.732 141.023L83.5711 141.228L9.32449 137.293C6.71578 137.235 4.23838 138.273 2.62544 140.324L1.65744 141.556C0.338118 144.501 0.731579 147.799 2.87091 150.146L52.0262 208.375L48.0658 221.857C46.8781 225.902 49.237 230.08 52.9148 231.313C53.1195 231.474 53.1195 231.474 53.4866 231.431C57.5313 232.619 61.7092 230.26 62.9422 226.582C63.1031 226.377 63.1031 226.377 63.0604 226.01C70.8952 198.312 82.7746 171.802 98.2601 147.462C99.2708 146.598 100.239 145.367 100.636 144.018C105.945 135.578 111.501 127.666 117.63 119.87C141.617 88.9383 171.393 62.8879 205.46 43.2004C209.107 41.0895 210.574 36.2684 208.261 32.4572C206.151 28.8059 201.33 27.3391 197.68 29.4502L197.679 29.4534ZM131.317 23.0853L173.683 44.7762C163.069 52.3654 153.073 60.4368 143.529 69.1987L131.317 23.0853ZM26.5421 153.817L74.8193 156.588C68.5572 167.93 63.0714 179.551 58.159 191.289L26.5421 153.817ZM93.8395 126.064L71.7071 82.4388L118.355 94.882C113.912 99.6871 109.514 104.861 105.321 110.194C101.127 115.528 97.4608 120.612 93.8398 126.064L93.8395 126.064Z"
                                />
                            </svg>
    
</Persona>
 


</div>}
export const PersonaCardSmall = () => { //import { Persona, PersonaSize, IPersonaSharedProps} from '@fluentui/react';
    const examplePersona: IPersonaSharedProps = {
        imageInitials: 'AL',
        text: 'Annie Lindqvist',
        secondaryText: 'Mai 2, Terça',
    }; return <div> <Persona
    className={styles['bt-persona-background-small']}
{...examplePersona}
size={PersonaSize.size40}
imageAlt="Annie Lindqvist, status is away">
    <svg className={styles['left-decoration']} xmlns="http://www.w3.org/2000/svg" width={85.5} height={70} viewBox="0 0 171 147" fill={'#201f1e'}>
                                <path opacity="0.6" d="M-48.9392 98.7344L-39.0715 95.7048L16.7281 144.234C19.0597 146.388 22.3544 146.806 25.3098 145.505L26.5474 144.545C28.4038 143.105 29.6193 140.842 29.7376 138.439L28.858 64.4917L29.0635 64.3346L93.896 100.242C96.6854 101.711 99.867 101.555 102.342 99.6351L102.548 99.4755C105.022 97.5569 105.965 94.5143 105.238 91.4459L88.6572 18.1177L88.863 17.9581L159.941 39.7757C162.457 40.4651 165.112 40.0583 167.175 38.459L168.412 37.4992C170.406 34.9619 170.824 31.6671 169.318 28.8714L135.745 -39.5375L142.856 -51.6576C144.989 -55.2937 143.714 -59.9188 140.444 -62.0066C140.285 -62.2124 140.285 -62.2124 139.918 -62.26C136.282 -64.3928 131.657 -63.1173 129.569 -59.8481C129.363 -59.6885 129.364 -59.6885 129.316 -59.322C115 -34.3501 97.0479 -11.5107 76.1234 8.34899C74.9334 8.94232 73.6958 9.90215 72.9832 11.1139C65.7867 18.0156 58.4785 24.3448 50.6425 30.4219C19.8714 54.6155 -15.3314 72.6701 -53.1553 83.5112C-57.2056 84.6748 -59.7974 88.9965 -58.4771 93.2548C-57.3152 97.3087 -52.9935 99.9006 -48.9407 98.7374L-48.9392 98.7344ZM13.8992 121.001L-21.9444 89.6862C-9.80727 84.8966 1.84809 79.4896 13.231 73.3027L13.8992 121.001ZM147.243 19.5707L101.078 5.17801C109.902 -4.30718 118.042 -14.2515 125.653 -24.4482L147.243 19.5707ZM75.2245 30.1805L86.1203 77.8699L43.8806 54.4888C49.3557 50.904 54.8776 46.9512 60.2381 42.7939C65.6001 38.6355 70.3896 34.5915 75.2241 30.1808L75.2245 30.1805Z"
                                />
                            </svg>
                            <svg className={styles['right-decoration']} xmlns="http://www.w3.org/2000/svg" width={85.5} height={70} viewBox="0 0 163 143" fill={'#201f1e'}>
                                <path opacity="0.6" d="M197.679 29.4534L188.84 34.7849L122.94 1.2309C120.156 -0.293153 116.858 0.100313 114.306 2.07888L113.338 3.31011C111.886 5.15695 111.256 7.64733 111.724 10.0076L130.504 81.5354L130.343 81.7376L58.7396 62.6194C55.6773 61.8705 52.6285 62.7931 50.6923 65.2557L50.5314 65.4605C48.5965 67.9215 48.4196 71.102 49.8686 73.9026L83.732 141.023L83.5711 141.228L9.32449 137.293C6.71578 137.235 4.23838 138.273 2.62544 140.324L1.65744 141.556C0.338118 144.501 0.731579 147.799 2.87091 150.146L52.0262 208.375L48.0658 221.857C46.8781 225.902 49.237 230.08 52.9148 231.313C53.1195 231.474 53.1195 231.474 53.4866 231.431C57.5313 232.619 61.7092 230.26 62.9422 226.582C63.1031 226.377 63.1031 226.377 63.0604 226.01C70.8952 198.312 82.7746 171.802 98.2601 147.462C99.2708 146.598 100.239 145.367 100.636 144.018C105.945 135.578 111.501 127.666 117.63 119.87C141.617 88.9383 171.393 62.8879 205.46 43.2004C209.107 41.0895 210.574 36.2684 208.261 32.4572C206.151 28.8059 201.33 27.3391 197.68 29.4502L197.679 29.4534ZM131.317 23.0853L173.683 44.7762C163.069 52.3654 153.073 60.4368 143.529 69.1987L131.317 23.0853ZM26.5421 153.817L74.8193 156.588C68.5572 167.93 63.0714 179.551 58.159 191.289L26.5421 153.817ZM93.8395 126.064L71.7071 82.4388L118.355 94.882C113.912 99.6871 109.514 104.861 105.321 110.194C101.127 115.528 97.4608 120.612 93.8398 126.064L93.8395 126.064Z"
                                />
                            </svg>
    
</Persona>
</div>}
export const PersonaCardMedium = () => { //import { Persona, PersonaSize, IPersonaSharedProps} from '@fluentui/react';
    const examplePersona: IPersonaSharedProps = {
        imageInitials: 'AL',
        text: 'Annie Lindqvist',
        secondaryText: 'Mai 2, Terça',
    }; return <div> <Persona
    className={styles['bt-persona-background-medium']}
{...examplePersona}
size={PersonaSize.size40}
imageAlt="Annie Lindqvist, status is away">
    <svg className={styles['left-decoration']} xmlns="http://www.w3.org/2000/svg" width={85.5} height={70} viewBox="0 0 171 147" fill={'#201f1e'}>
                                <path opacity="0.6" d="M-48.9392 98.7344L-39.0715 95.7048L16.7281 144.234C19.0597 146.388 22.3544 146.806 25.3098 145.505L26.5474 144.545C28.4038 143.105 29.6193 140.842 29.7376 138.439L28.858 64.4917L29.0635 64.3346L93.896 100.242C96.6854 101.711 99.867 101.555 102.342 99.6351L102.548 99.4755C105.022 97.5569 105.965 94.5143 105.238 91.4459L88.6572 18.1177L88.863 17.9581L159.941 39.7757C162.457 40.4651 165.112 40.0583 167.175 38.459L168.412 37.4992C170.406 34.9619 170.824 31.6671 169.318 28.8714L135.745 -39.5375L142.856 -51.6576C144.989 -55.2937 143.714 -59.9188 140.444 -62.0066C140.285 -62.2124 140.285 -62.2124 139.918 -62.26C136.282 -64.3928 131.657 -63.1173 129.569 -59.8481C129.363 -59.6885 129.364 -59.6885 129.316 -59.322C115 -34.3501 97.0479 -11.5107 76.1234 8.34899C74.9334 8.94232 73.6958 9.90215 72.9832 11.1139C65.7867 18.0156 58.4785 24.3448 50.6425 30.4219C19.8714 54.6155 -15.3314 72.6701 -53.1553 83.5112C-57.2056 84.6748 -59.7974 88.9965 -58.4771 93.2548C-57.3152 97.3087 -52.9935 99.9006 -48.9407 98.7374L-48.9392 98.7344ZM13.8992 121.001L-21.9444 89.6862C-9.80727 84.8966 1.84809 79.4896 13.231 73.3027L13.8992 121.001ZM147.243 19.5707L101.078 5.17801C109.902 -4.30718 118.042 -14.2515 125.653 -24.4482L147.243 19.5707ZM75.2245 30.1805L86.1203 77.8699L43.8806 54.4888C49.3557 50.904 54.8776 46.9512 60.2381 42.7939C65.6001 38.6355 70.3896 34.5915 75.2241 30.1808L75.2245 30.1805Z"
                                />
                            </svg>
                            <svg className={styles['right-decoration']} xmlns="http://www.w3.org/2000/svg" width={85.5} height={70} viewBox="0 0 163 143" fill={'#201f1e'}>
                                <path opacity="0.6" d="M197.679 29.4534L188.84 34.7849L122.94 1.2309C120.156 -0.293153 116.858 0.100313 114.306 2.07888L113.338 3.31011C111.886 5.15695 111.256 7.64733 111.724 10.0076L130.504 81.5354L130.343 81.7376L58.7396 62.6194C55.6773 61.8705 52.6285 62.7931 50.6923 65.2557L50.5314 65.4605C48.5965 67.9215 48.4196 71.102 49.8686 73.9026L83.732 141.023L83.5711 141.228L9.32449 137.293C6.71578 137.235 4.23838 138.273 2.62544 140.324L1.65744 141.556C0.338118 144.501 0.731579 147.799 2.87091 150.146L52.0262 208.375L48.0658 221.857C46.8781 225.902 49.237 230.08 52.9148 231.313C53.1195 231.474 53.1195 231.474 53.4866 231.431C57.5313 232.619 61.7092 230.26 62.9422 226.582C63.1031 226.377 63.1031 226.377 63.0604 226.01C70.8952 198.312 82.7746 171.802 98.2601 147.462C99.2708 146.598 100.239 145.367 100.636 144.018C105.945 135.578 111.501 127.666 117.63 119.87C141.617 88.9383 171.393 62.8879 205.46 43.2004C209.107 41.0895 210.574 36.2684 208.261 32.4572C206.151 28.8059 201.33 27.3391 197.68 29.4502L197.679 29.4534ZM131.317 23.0853L173.683 44.7762C163.069 52.3654 153.073 60.4368 143.529 69.1987L131.317 23.0853ZM26.5421 153.817L74.8193 156.588C68.5572 167.93 63.0714 179.551 58.159 191.289L26.5421 153.817ZM93.8395 126.064L71.7071 82.4388L118.355 94.882C113.912 99.6871 109.514 104.861 105.321 110.194C101.127 115.528 97.4608 120.612 93.8398 126.064L93.8395 126.064Z"
                                />
                            </svg>
    
</Persona>
</div>}
export const PersonaCardLarge = () => { //import { Persona, PersonaSize, IPersonaSharedProps} from '@fluentui/react';
    const examplePersona: IPersonaSharedProps = {
        imageInitials: 'AL',
        text: 'Annie Lindqvist',
        secondaryText: 'Mai 2, Terça',
    }; return <div> <Persona
    className={styles['bt-persona-background-large']}
{...examplePersona}
size={PersonaSize.size40}
imageAlt="Annie Lindqvist, status is away">
    <svg className={styles['left-decoration']} xmlns="http://www.w3.org/2000/svg" width={85.5} height={70} viewBox="0 0 171 147" fill={'#201f1e'}>
                                <path opacity="0.6" d="M-48.9392 98.7344L-39.0715 95.7048L16.7281 144.234C19.0597 146.388 22.3544 146.806 25.3098 145.505L26.5474 144.545C28.4038 143.105 29.6193 140.842 29.7376 138.439L28.858 64.4917L29.0635 64.3346L93.896 100.242C96.6854 101.711 99.867 101.555 102.342 99.6351L102.548 99.4755C105.022 97.5569 105.965 94.5143 105.238 91.4459L88.6572 18.1177L88.863 17.9581L159.941 39.7757C162.457 40.4651 165.112 40.0583 167.175 38.459L168.412 37.4992C170.406 34.9619 170.824 31.6671 169.318 28.8714L135.745 -39.5375L142.856 -51.6576C144.989 -55.2937 143.714 -59.9188 140.444 -62.0066C140.285 -62.2124 140.285 -62.2124 139.918 -62.26C136.282 -64.3928 131.657 -63.1173 129.569 -59.8481C129.363 -59.6885 129.364 -59.6885 129.316 -59.322C115 -34.3501 97.0479 -11.5107 76.1234 8.34899C74.9334 8.94232 73.6958 9.90215 72.9832 11.1139C65.7867 18.0156 58.4785 24.3448 50.6425 30.4219C19.8714 54.6155 -15.3314 72.6701 -53.1553 83.5112C-57.2056 84.6748 -59.7974 88.9965 -58.4771 93.2548C-57.3152 97.3087 -52.9935 99.9006 -48.9407 98.7374L-48.9392 98.7344ZM13.8992 121.001L-21.9444 89.6862C-9.80727 84.8966 1.84809 79.4896 13.231 73.3027L13.8992 121.001ZM147.243 19.5707L101.078 5.17801C109.902 -4.30718 118.042 -14.2515 125.653 -24.4482L147.243 19.5707ZM75.2245 30.1805L86.1203 77.8699L43.8806 54.4888C49.3557 50.904 54.8776 46.9512 60.2381 42.7939C65.6001 38.6355 70.3896 34.5915 75.2241 30.1808L75.2245 30.1805Z"
                                />
                            </svg>
                            <svg className={styles['right-decoration']} xmlns="http://www.w3.org/2000/svg" width={85.5} height={70} viewBox="0 0 163 143" fill={'#201f1e'}>
                                <path opacity="0.6" d="M197.679 29.4534L188.84 34.7849L122.94 1.2309C120.156 -0.293153 116.858 0.100313 114.306 2.07888L113.338 3.31011C111.886 5.15695 111.256 7.64733 111.724 10.0076L130.504 81.5354L130.343 81.7376L58.7396 62.6194C55.6773 61.8705 52.6285 62.7931 50.6923 65.2557L50.5314 65.4605C48.5965 67.9215 48.4196 71.102 49.8686 73.9026L83.732 141.023L83.5711 141.228L9.32449 137.293C6.71578 137.235 4.23838 138.273 2.62544 140.324L1.65744 141.556C0.338118 144.501 0.731579 147.799 2.87091 150.146L52.0262 208.375L48.0658 221.857C46.8781 225.902 49.237 230.08 52.9148 231.313C53.1195 231.474 53.1195 231.474 53.4866 231.431C57.5313 232.619 61.7092 230.26 62.9422 226.582C63.1031 226.377 63.1031 226.377 63.0604 226.01C70.8952 198.312 82.7746 171.802 98.2601 147.462C99.2708 146.598 100.239 145.367 100.636 144.018C105.945 135.578 111.501 127.666 117.63 119.87C141.617 88.9383 171.393 62.8879 205.46 43.2004C209.107 41.0895 210.574 36.2684 208.261 32.4572C206.151 28.8059 201.33 27.3391 197.68 29.4502L197.679 29.4534ZM131.317 23.0853L173.683 44.7762C163.069 52.3654 153.073 60.4368 143.529 69.1987L131.317 23.0853ZM26.5421 153.817L74.8193 156.588C68.5572 167.93 63.0714 179.551 58.159 191.289L26.5421 153.817ZM93.8395 126.064L71.7071 82.4388L118.355 94.882C113.912 99.6871 109.514 104.861 105.321 110.194C101.127 115.528 97.4608 120.612 93.8398 126.064L93.8395 126.064Z"
                                />
                            </svg>
    
</Persona>
</div>}