import React, { useState } from 'react';
import {
  Form, FormGroup, Label, Input, Button
} from 'reactstrap';
import getLyrics from '../../helpers/data/lyricData';

const Song = () => {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [data, setData] = useState(null);

  async function getSongLyrics() {
    await getLyrics(artist, title)
      .then((response) => setData(response));
  }

  return (
    <>
    <div className="container">
      <Form onSubmit={(e) => {
        e.preventDefault();
        getSongLyrics();
      }}>
        <FormGroup>
  <h1>Song Lyric Search Form</h1>
  <Label for="artist">Artist:</Label>
    <Input
      type="text"
      name="artist"
        id="artist"
       placeholder="Halsey"
      value={artist}
      onChange={(e) => setArtist(e.target.value)}
          />
    </FormGroup>
    <FormGroup>
      <Label for="songTitle">Song title:</Label>
        <Input
        type="text"
        name="songTitle"
        id="songTitle"
        placeholder="Colors"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
    </FormGroup>
    <Button>Submit</Button>
    </Form>
    </div>
    <div className="songContainer">
    {data
      ? <div className="results">
      <h1>{title.toUpperCase()}</h1>
      <h2>BY: {artist.toUpperCase()}</h2>
      <h6>{data.lyrics}</h6>
      </div>
      : null}
      </div>
    </>
  );
};

export default Song;
