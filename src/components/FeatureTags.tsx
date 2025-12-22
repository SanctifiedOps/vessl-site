type FeatureTagsProps = {
  items: string[]
}

const FeatureTags = ({ items }: FeatureTagsProps) => (
  <div className="container tag-row reveal">
    {items.map((item) => (
      <span key={item} className="pill subtle">
        {item}
      </span>
    ))}
  </div>
)

export default FeatureTags
