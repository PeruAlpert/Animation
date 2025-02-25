import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { GetAllPostsService } from '../../services/Posts/GetAllPosts'
import PostsList from '../../components/Lists/PostsList'

const InfoScreen = () => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  
  const handlePost = async () => {
    setLoading(true);
    await GetAllPostsService()
      .then(res => {
        console.log('res post', res);
        setPosts(res);
      })
      .catch(error => {
          console.log('error post', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    handlePost()
  }, [])
  
  return (
    <View style={styles.container}>
      <PostsList data={posts}/>
    </View>
  )
}

export default InfoScreen