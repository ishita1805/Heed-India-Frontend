import React from 'react'
import { Page, Text, View, Document, StyleSheet, Image, Link, PDFViewer } from '@react-pdf/renderer';
import header from '../../assets/reciept-header.png'
import footer from '../../assets/reciept-footer.png'

const PDF = (props) => {

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingBottom: 30,
            paddingTop: 30,
            paddingHorizontal: "5%",
            backgroundColor: '#ffffff'
        },
        viewmiddle: {
            flexDirection: 'row',
            marginTop: 30,
            marginBottom: 30,
            border: 'solid',
            borderColor: '#7a7a7a',
            borderWidth: '0.5px',
            padding: '2.5%',
            marginHorizontal: "2.5%",
            fontSize: 12,
            alignItems: 'flex-start',
            width: "80%",
        },
        textcont: {
            flexDirection: 'row',
            flexWrap: "wrap",
            marginTop: 5,
            marginBottom: 5,
        },
        bold: {
            fontSize: 10,
            color: '#525252',
        },
        text: {
            fontSize: 11,
            width: '100%',
            color: '#222222',
        },
        image: {
            width: "100%",
        },
        inner: {
            flex: 1,
            flexDirection: 'column',
        },
        link: {
            fontSize: 10,
            color: '#4B61B0',
            textDecoration: 'underline'
        }

    });

    

    return (
        <PDFViewer className='pdf-viewer'>
            <Document>
                <Page size="A4" style={styles.page} wrap>
                    {/* header */}
                    <View style={styles.sectioncenter}>
                        <Image src={header} style={styles.image} />
                    </View>
                    <Link style={styles.link} src="https://heedindia.org">www.heedindia.org</Link>
                    {/* content */}
                    <View style={styles.viewmiddle}>
                        <View style={styles.inner}>
                            <View style={styles.textcont}><Text style={styles.bold}>Donor Name: </Text><Text style={styles.text}>{props.name}</Text></View>
                            <View style={styles.textcont}><Text style={styles.bold}>Received Date:</Text><Text style={styles.text}>{props.date}</Text></View>
                            <View style={styles.textcont}><Text style={styles.bold}>Payment Mode: </Text><Text style={styles.text}>{props.mode}</Text></View>
                            <View style={styles.textcont}><Text style={styles.bold}>Amount: </Text><Text style={styles.text}>{props.amt}</Text></View>
                            <View style={styles.textcont}><Text style={styles.bold}>Amount in words: </Text><Text style={styles.text}>{props.amt_word}</Text></View>
                            <View style={styles.textcont}><Text style={styles.bold}>Donation Purpose: </Text><Text style={styles.text}>{props.remark}</Text></View>
                        </View>
                        <View style={styles.inner}>
                            <View style={styles.textcont}><Text style={styles.bold}>Address: </Text><Text style={styles.text}>{props.address}</Text></View>
                            <View style={styles.textcont}><Text style={styles.bold}>Phone No.: </Text><Text style={styles.text}>{props.num}</Text></View>
                            <View style={styles.textcont}><Text style={styles.bold}>Email Id: </Text><Text style={styles.text}>{props.email}</Text></View>
                            <View style={styles.textcont}><Text style={styles.bold}>PAN No.: </Text><Text style={styles.text}>{props.pan}</Text></View>
                            <View style={styles.textcont}><Text style={styles.bold}>Receipt No.: </Text><Text style={styles.text}>{props.receipt}</Text></View>
                        </View>
                    </View>
                    {/* footer */}
                    <View style={styles.sectioncenter}>
                        <Image src={footer} style={styles.image} />
                    </View>
                    <Link style={styles.link} src="https://heedindia.org">www.heedindia.org</Link>
                </Page>
            </Document>
        </PDFViewer>
    )
}

export default PDF








