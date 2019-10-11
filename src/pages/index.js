import React from 'react';
import Container from '@material-ui/core/Container';
import PageTemplate from './template';
import { UserGrid, MessageList, Homepage, SettingsLayout } from '../components'


export const Home = () =>
  <section className="home">
    <PageTemplate />
    <Homepage />
  </section>


export const Explore = () =>
<section className="explore">
    <PageTemplate />
    <Container maxWidth="lg">
      <UserGrid />
   </Container>
</section>

export const Messages = () =>
  <section className="messages">
    <PageTemplate />
    <MessageList />
  </section>

export const Settings = () =>
  <section className="settings">
    <PageTemplate />
    <SettingsLayout />
  </section>

export const Whoops404 = ({location}) =>
  <div className="whoops-404">
    <h1>Resource not found at '{location.pathname}'</h1>
  </div>
