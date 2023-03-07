import React from 'react';
import {
  RemoteView,
  RemoteViewErrorBoundary,
  RemoteViewProvider,
} from '@modular-scripts/remote-view';
import { H2, Text, Spinner } from '@salt-ds/core';

import type { MicrofrontendManifest } from '@modular-scripts/modular-types';

export function FallbackIframesExample() {
  const remoteViews = [
    'http://localhost:4141/view1',
    'http://localhost:4141/view2',
  ];

  function shouldUseIframe(manifest: MicrofrontendManifest) {
    return ['view1', 'view2'].includes(manifest.name);
  }

  return (
    <section>
      <H2>Fallback iframe example</H2>
      <Text>
        Implement <code>loadWithIframeFallback</code> to control any views that
        should render in an iframe instead.
      </Text>
      <RemoteViewProvider
        urls={remoteViews}
        loadWithIframeFallback={shouldUseIframe}
      >
        <div className="ExampleContainer ExampleContainer--happy-path">
          {remoteViews.map((url, key) => (
            <div className="RemoteViewContainer" key={key}>
              <div className="RemoteViewContainer__label">{url}</div>
              <div className="RemoteViewContainer__content">
                <RemoteViewErrorBoundary>
                  <RemoteView
                    url={url}
                    loading={
                      <Spinner
                        aria-label="loading"
                        role="status"
                        className="RemoteViewContainer__spinner"
                      />
                    }
                  />
                </RemoteViewErrorBoundary>
              </div>
            </div>
          ))}
        </div>
      </RemoteViewProvider>
    </section>
  );
}
