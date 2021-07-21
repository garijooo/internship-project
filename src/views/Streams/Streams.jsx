import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../store/auth/actions';
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
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.ID) {
      let token;
      if (localStorage.getItem('auth-token')) token = localStorage.getItem('auth-token');
      else token = sessionStorage.getItem('auth-token');
      dispatch(fetchUser(getEmail(token), token));
    }
  }, []);

  const onSearchChange = (searchedValue) => {
    setSearchingValue(searchedValue);
    dispatch(updateSearchingValue(searchedValue));
  };

  return (
    <PageContainer>
      <StreamsHeader />
      <SearchBar
        title="Search stream"
        onChangeHandler={onSearchChange}
        value={searchingValue}
      />
      <StreamsList fetchedStreams={streams} />
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
