import React, { useState } from 'react';
import {
  RemoteView,
  RemoteViewErrorBoundary,
  RemoteViewProvider,
} from '@modular-scripts/remote-view';
import { H2, Text, Spinner } from '@salt-ds/core';

export function DefaultErrorBoundaryExample() {
  const [badView] = useState('http://localhost:4141/this-view-will-404');

  return (
    <section>
      <H2>View not found (default error boundary)</H2>
      <Text>
        Simply wrap <code>RemoteView</code>s with the provided{' '}
        <code>RemoteViewErrorBoundary</code>.
      </Text>
      <RemoteViewProvider urls={[badView]}>
        <div className="ExampleContainer">
          <div className="RemoteViewContainer">
            <div className="RemoteViewContainer__label">{badView}</div>
            <div className="RemoteViewContainer__content">
              <RemoteViewErrorBoundary>
                <RemoteView
                  url={badView}
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
        </div>
      </RemoteViewProvider>
    </section>
  );
}
