import Element from './Legal';
import { useStyles } from '../../../common/context/ThemeContext/ThemeContext';

function Legal() {
  const styles = useStyles();

  // TODO get this information from the API
  const retailerLegalText = `
    <div>
    Placeholder for Retailer’s Marketing and Legal text that will be customized in the LiquidShop builder. It can <a href="">contain links</a> and other <b>text formatting options</b> through a rich text editor.
    </div>
  `;
  return <Element fontFamily={styles.fonts.family} retailerLegalText={retailerLegalText} />;
}

export default Legal;
