//File ProjectIcons.js
import React from 'react'
import { withBaseIcon } from 'react-icons-kit'

import {fighterJet} from 'react-icons-kit/fa/fighterJet';
import {laptop} from 'react-icons-kit/fa/laptop';
import {lightbulbO} from 'react-icons-kit/fa/lightbulbO';
import {pagelines} from 'react-icons-kit/fa/pagelines'


let AboutUsContainer = withBaseIcon({size:70, style:{color:'#ffffff'}});

export const AboutUsFastIcon = () => <AboutUsContainer icon={fighterJet} />;
export const AboutUsResponsive = () => <AboutUsContainer icon={laptop} />;
export const AboutUsBulb = () => <AboutUsContainer icon={lightbulbO} />;
export const AboutUsDynamic = () => <AboutUsContainer icon={pagelines} />;
