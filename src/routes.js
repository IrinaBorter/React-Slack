import App from './app/components/app.jsx';
import Channel from './app/components/channels/channels';
import Chat from './app/components/chat/chat';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/workspaces/:workspaceId',
        component: Channel,
        routes: [
          {
            path: '/workspaces/:workspaceId/channels/:channelId',
            component: Chat,
          },
        ],
      },
    ]
  }
];

export default routes;
