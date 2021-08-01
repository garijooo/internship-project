import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, fetchStreams } from '../../store/auth/actions';
import PageContainer from '../../components/PageContainer/PageContainer';
import StreamsHeader from '../../components/StreamsHeader/StreamsHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import StreamsList from '../../components/StreamsList/StreamsList';
import byField from '../../utils/sortByField';
import getEmail from '../../utils/jwtDecoder';
import getToken from '../../utils/getTokenByBrowser';

const Streams = ({ streams }) => {
  const [streamsArray, setStreamsArray] = useState([]);

  const [toNullify, setToNullify] = useState(false);
  const [search, setSearch] = useState('');
  // const [filter, setFilter] = useState('');
  // const [sort, setSort] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const token = getToken();
    if (!auth.ID) {
      dispatch(fetchUser(getEmail(token), token));
    }
    dispatch(fetchStreams(token));
  }, [auth.ID, dispatch]);

  useEffect(() => {
    setStreamsArray(streams);
  }, [streams]);

  const memorizedStreams = useMemo(
    () => (search ? streamsArray.filter((stream) => stream.title.indexOf(search) >= 0)
      : streams), [search],
  );

  useEffect(() => {
    setStreamsArray(memorizedStreams);
    setToNullify(!toNullify);
  }, [memorizedStreams]);

  const onSearchChange = (value) => {
    setSearch(value);
  };

  const onSortActionHandler = (field) => {
    setStreamsArray([...streamsArray].sort(byField(field)));
  };

  const onFilterActionHandler = (field, item) => {
    setStreamsArray(
      (streamsArray ?? []).filter((stream) => stream[field] === item),
    );
  };

  return (
    <PageContainer>
      <StreamsHeader />
      <SearchBar
        title="Search stream"
        onChangeHandler={onSearchChange}
        value={search}
      />
      <StreamsList
        fetchedStreams={streamsArray}
        onSortAction={onSortActionHandler}
        onFilterAction={onFilterActionHandler}
        toNullify={toNullify}
      />
    </PageContainer>
  );
};

Streams.propTypes = {
  streams: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      duration: PropTypes.number,
      interns: PropTypes.number,
      mentor: PropTypes.string,
      mentorAvatar: PropTypes.string,
      lead: PropTypes.string,
      leadAvatar: PropTypes.string,
      status: PropTypes.string,
    }),
  ).isRequired,
};

export default Streams;
