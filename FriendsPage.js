import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../styles/FriendsPage.css';

const FriendsPage = () => {
	return (
		<Tabs className="tabs">
			<TabList>
				<Tab>PROFILE INFO</Tab>
				<Tab>FRIENDS</Tab>
				<Tab>ADD VIDEO</Tab>
			</TabList>

			<TabPanel>
				<h2>Any content 1</h2>
			</TabPanel>

			<TabPanel>
				<h2>
					<div className="intro">
						<span>Username, now let's get you connected with friends.</span>
					</div>
					<div className="subIntro">
						<span>Find your friends.</span>
					</div>
					<div>
						<button>google contacts</button>
					</div>
					<div>
						<button>facebook contacts</button>
					</div>
					<div>
						<button className="skip">skip this step</button>
					</div>
				</h2>
			</TabPanel>

			<TabPanel>
				<h2>Any content 2</h2>
			</TabPanel>
		</Tabs>
	);
};

export default FriendsPage;
