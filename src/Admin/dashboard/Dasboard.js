import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

export const Dashboart = () => (
  <Card>
    <CardContent>
      <h1>Dashboard</h1>
      <Link to="/posts">Posts</Link>
      <Link to="/posts/create">Create a new post</Link>
      <Link to="/posts/123/show">My favorite post</Link>
    </CardContent>
  </Card>
);
