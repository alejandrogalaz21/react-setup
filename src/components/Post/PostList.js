import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Spinner } from 'reactstrap'
import Loading from '../Loading'

export const PostList = props => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Lista De Post</h2>
        </Col>
      </Row>
      <Row>
        <Col>{props.postLoading && <Loading />}</Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => ({
  posts: state.post.all,
  postError: state.post.error,
  postLoading: state.post.loading
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
