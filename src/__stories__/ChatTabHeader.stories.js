import React from "react";
<<<<<<< HEAD:src/__stories__/ChatTabHeader.stories.js
import TabHeader from "../components/ChatTab/ChatTabAtoms/TabHeader";

export default {
  title: "ChatTab/Components/TabChatHeader",
=======
import TabHeader from "../../components/ChatTab/Atoms/TabHeader"

export default {
  title: "ChatTab/Components/Header",
>>>>>>> dev:src/__stories__/ChatTab/TabChatHeader.stories.js
  component: TabHeader,
};

const Template = (args) => <TabHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  titleHeader : "New Message"
}