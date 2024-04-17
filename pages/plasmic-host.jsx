import * as React from 'react';
import { PlasmicCanvasHost, registerComponent } from '@plasmicapp/react-web/lib/host';
import NewComponent from '@/components/NewComponent';
import NavBarCC from '@/components/NavBarCC';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Calendar } from '@/components/ui/calendar';
// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

registerComponent(NewComponent, {
  name: "NewComponent",
  props: {
    className: 'string',
    message: 'string'
  },
  importPath: '@/components/NewComponent.jsx',
  isDefaultExport: true
})

registerComponent(Alert, {
  name: 'AlertCC',
  props: {
    className: 'string',
  },
  importPath: '@/components/ui/alert.jsx',
  isDefaultExport: false
})

registerComponent(AlertTitle, {
  name: 'AlertTitleCC',
  props: {
    className: 'string',
  },
  importPath: '@/components/ui/alert.jsx',
  isDefaultExport: false
})

registerComponent(AlertDescription, {
  name: 'AlertDescriptionCC',
  props: {
    className: 'string'
  },
  importPath: '@/components/ui/alert.jsx',
  isDefaultExport: false
})

registerComponent(Calendar, {
  name: 'CalendarCC',
  props: {
    className: 'string'
  }
})

registerComponent(NavBarCC, {
  name: 'NavBarCC',
  props: {
    tabs: 'array',
    style: 'object',
    className: 'string'
  },
  importPath: '@/components/NavBarCC.jsx', // Adjust based on actual relative path
  isDefaultExport: true
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
