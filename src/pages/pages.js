import React from 'react';
import Container from '@material-ui/core/Container';
import PageTemplate from './template';
import { UserGrid, MessageList } from '../components'

export const Home = () =>
  <section className="home">
    <PageTemplate />
    <h2>Homepage</h2>
  </section>


export const Explore = () =>
<section className="explore">
    <PageTemplate />
    <UserGrid name="Explore"/>

</section>

export const Messages = () =>
  <section className="messages">
    <PageTemplate />
    <MessageList />
  </section>

export const Settings = () =>
  <section className="settings">
    <PageTemplate />
    <h2>Messages</h2>
  </section>

export const Whoops404 = ({location}) =>
  <div className="whoops-404">
    <h1>Resource not found at '{location.pathname}'</h1>
  </div>
