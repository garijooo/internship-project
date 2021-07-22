import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, fetchStreams } from '../../store/auth/actions';
import getEmail from '../../utils/jwtDecoder';
import { updateSearchingValue } from '../../store/options/actions';
import PageContainer from '../../components/PageContainer/PageContainer';
import StreamsHeader from '../../components/StreamsHeader/StreamsHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import StreamsList from '../../components/StreamsList/StreamsList';

const Streams = (
  { streams },
) => {
  const [searchingValue, setSearchingValue] = useState('');
  const [streamsArray, setStreamsArray] = useState([]);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem('auth-token') ? localStorage.getItem('auth-token') : sessionStorage.getItem('auth-token');
    if (!auth.ID) {
      dispatch(fetchUser(getEmail(token), token));
    }
    dispatch(fetchStreams(token));
  }, []);

  useEffect(() => {
    setStreamsArray(streams);
  }, [streams]);

  const onSearchChange = (searchedValue) => {
    setSearchingValue(searchedValue);
    dispatch(updateSearchingValue(searchedValue));
  };

  const onSearchActionHandler = () => {
    if (!searchingValue) setStreamsArray(streams);
    else setStreamsArray((streamsArray ?? []).filter((stream) => stream.title === searchingValue));
  };

  const byField = (field) => (a, b) => (a[field] > b[field] ? 1 : -1);

  const onSortActionHandler = (field) => {
    setStreamsArray([...streamsArray].sort(byField(field)));
  };

  return (
    <PageContainer>
      <StreamsHeader />
      <SearchBar
        title="Search stream"
        onChangeHandler={onSearchChange}
        value={searchingValue}
        onSearchAction={onSearchActionHandler}
      />
      <StreamsList fetchedStreams={streamsArray} onSortAction={onSortActionHandler} />
    </PageContainer>
  );
};

Streams.propTypes = {
  streams: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    duration: PropTypes.number,
    interns: PropTypes.number,
    mentor: PropTypes.string,
    mentorAvatar: PropTypes.string,
    lead: PropTypes.string,
    leadAvatar: PropTypes.string,
    status: PropTypes.string,
  })).isRequired,
};

export default Streams;
